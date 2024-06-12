<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
const frontDoorLocked = ref(false);
const cameraActive = ref(false);
const alarmActive = ref(false);

const doorStatus = computed(() => (frontDoorLocked.value ? "Locked" : "Open"));
const cameraStatus = computed(() => (cameraActive.value ? "ON" : "OFF"));
const alarmStatus = computed(() => (alarmActive.value ? "ON" : "OFF"));
const doorStatusIcon = computed(() =>
  frontDoorLocked.value ? "fa-door-closed" : "fa-door-open"
);

const animateDoor = ref(false);
const animateCamera = ref(false);
const animateAlarm = ref(false);

const fetchSecurityData = async () => {
  try {
    const response = await axios.get("http://localhost:8080/room/1");
    const data = response.data;

    frontDoorLocked.value = data.is_front_door_locked;
    cameraActive.value = data.is_camera_active;
    alarmActive.value = data.is_alarm_active;
  } catch (error) {
    console.error("Error fetching security data:", error);
  }
};

onMounted(() => {
  fetchSecurityData();
});

const triggerAnimation = (animateRef) => {
  animateRef.value = true;
  setTimeout(() => {
    animateRef.value = false;
  }, 1000); // Duration matches the CSS animation duration
};

const toggleDoorStatus = async () => {
  frontDoorLocked.value = !frontDoorLocked.value;
  triggerAnimation(animateDoor);
  await sendUpdateRequest();
};

const toggleCameraStatus = async () => {
  cameraActive.value = !cameraActive.value;
  triggerAnimation(animateCamera);
  await sendUpdateRequest();
};

const toggleAlarmStatus = async () => {
  alarmActive.value = !alarmActive.value;
  triggerAnimation(animateAlarm);
  await sendUpdateRequest();
};

const sendUpdateRequest = async () => {
  try {
    await axios.put("http://localhost:8080/room", {
      id: 1,
      door_status: frontDoorLocked.value,
      camera_status: cameraActive.value,
      alarm_status: alarmActive.value,
    });
  } catch (error) {
    console.error("Error updating status:", error);
  }
};
</script>

<template>
  <div class="security-status">
    <div class="security-header">
      <i class="fas fa-shield-alt"></i>
      <span>Security Status</span>
    </div>
    <div
      class="security-item"
      @click="toggleDoorStatus"
      :class="{ animate: animateDoor }"
    >
      <i class="fas" :class="doorStatusIcon"></i>
      <span
        >Front Door: <strong>{{ doorStatus }}</strong></span
      >
    </div>
    <div
      class="security-item"
      @click="toggleCameraStatus"
      :class="{ animate: animateCamera }"
    >
      <i class="fas fa-video"></i>
      <span
        >Camera: <strong>{{ cameraStatus }}</strong></span
      >
    </div>
    <div
      class="security-item"
      @click="toggleAlarmStatus"
      :class="{ animate: animateAlarm }"
    >
      <i class="fas fa-bell"></i>
      <span
        >Alarm: <strong>{{ alarmStatus }}</strong></span
      >
    </div>
  </div>
</template>
<style scoped>
.security-status {
  background: linear-gradient(135deg, #333 0%, #555 100%);
  padding: 30px;
  border-radius: 15px;
  text-align: left;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, background 0.3s ease;
}

.security-status:hover {
  transform: translateY(-5px);
  background: linear-gradient(135deg, #444 0%, #666 100%);
}

.security-header {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 24px;
  font-weight: bold;
}

.security-item {
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.security-item:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.security-item i {
  font-size: 28px;
  color: #00aaff;
  transition: transform 0.3s ease;
}

.security-item span {
  font-size: 18px;
}

.security-header i {
  font-size: 32px;
  color: #00aaff;
}

.animate {
  animation: highlight 1s ease-in-out, slide-in 1s ease-in-out;
}

@keyframes highlight {
  0% {
    background-color: rgba(0, 0, 0, 0.5);
  }
  50% {
    background-color: rgba(0, 170, 255, 0.7); /* Blue flash */
  }
  100% {
    background-color: rgba(0, 0, 0, 0.5);
  }
}

@keyframes slide-in {
  0% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
