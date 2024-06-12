<script setup>
import { ref, toRef, computed, onMounted } from "vue";
import axios from "axios";

const props = defineProps(["id", "name", "icon"]);

const id = toRef(props, "id");
const name = toRef(props, "name");
const is_active = ref(true);
const isLoading = ref(true);

const updated_at = ref(new Date());

const buttonClass = computed(() => ({
  "on-button": is_active.value,
  "off-button": !is_active.value,
}));

const status = computed(() => (is_active.value ? "on" : "off"));

const updated_at_formatted = computed(() => {
  if (!is_active.value) {
    return "Inactive";
  }

  const now = new Date();
  const updatedTime = new Date(updated_at.value);
  const timeDiff = now - updatedTime; // Difference in milliseconds

  // Calculate difference in hours and minutes
  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

  // Create formatted string based on hours and minutes
  let formattedTime = "Active ";
  if (hours > 0) {
    formattedTime += `${hours} hour${hours > 1 ? "s" : ""} `;
  } else if (minutes > 0) {
    formattedTime += `${minutes} minute${minutes > 1 ? "s" : ""}`;
  } else {
    formattedTime += "less than a minute";
  }

  return formattedTime.trim();
});

const fetchDeviceStatus = async () => {
  try {
    const response = await axios.get(
      `http://localhost:8080/device/${id.value}`
    );
    const data = response.data;
    isLoading.value = false;
    is_active.value = data.is_active;
    updated_at.value = data.updated_at;
  } catch (error) {
    console.error("Error fetching device status:", error);
  }
};

const updateDeviceStatus = async () => {
  const newStatus = !is_active.value;

  try {
    await axios.put(`http://localhost:8080/device`, {
      id: id.value,
      active: newStatus,
    });
    const response = await axios.get(
      `http://localhost:8080/device/${id.value}`
    );
    const data = response.data;
    is_active.value = data.is_active;
    updated_at.value = data.updated_at;
  } catch (error) {
    console.error("Error updating device status:", error);
  }
};

onMounted(() => {
  fetchDeviceStatus();
  setInterval(fetchDeviceStatus, 30 * 1000);
});
</script>

<template>
  <div v-if="!isLoading" class="device" :class="status">
    <i class="fas" :class="icon"></i>
    <span class="device-name">{{ name }}</span>
    <button :class="buttonClass" @click="updateDeviceStatus">
      {{ status.toUpperCase() }}
    </button>
    <span class="device-status">{{ updated_at_formatted }}</span>
  </div>
</template>

<style scoped>
.device {
  background-color: #333;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out,
    opacity 0.2s ease-in-out;
}

/* ON State Styling */
.device.on {
  background-color: #333;
  opacity: 1; /* Full opacity for active devices */
}

.device.on i {
  font-size: 36px;
  color: #00aaff; /* Icon color */
  margin-bottom: 10px;
}

.device.on .device-name,
.device.on .device-status {
  color: #ffffff; /* White text for active devices */
}

/* OFF State Styling */
.device.off {
  background-color: #444; /* Darker background for inactive devices */
  opacity: 0.6; /* Reduced opacity for inactive devices */
  position: relative;
  color: #777; /* Dimmer text color */
}

.device.off i {
  font-size: 36px;
  color: #777; /* Dimmed icon color */
  margin-bottom: 10px;
  filter: grayscale(100%); /* Grayscale icon */
}

.device.off .device-name,
.device.off .device-status {
  color: #999; /* Light gray text for inactive devices */
}

.device.off::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); /* Dark overlay */
  border-radius: 10px;
  z-index: 1; /* Ensure the overlay is on top */
}

.device.off button {
  z-index: 2; /* Ensure button is on top of overlay */
}

/* ON Button Style */
.device .on-button {
  padding: 10px 20px;
  background-color: #00aaff; /* Light blue color */
  border: none;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-size: 16px;
  margin-bottom: 10px; /* Margin above the status text */
}

.device .on-button:hover {
  background-color: #0077cc; /* Darker blue on hover */
  transform: scale(1.05); /* Slightly larger on hover */
}

/* OFF Button Style */
.device .off-button {
  padding: 10px 20px;
  background-color: #ff4444; /* Red color */
  border: none;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-size: 16px;
  margin-bottom: 10px; /* Margin above the status text */
}

.device .off-button:hover {
  background-color: #cc0000; /* Darker red on hover */
  transform: scale(1.05); /* Slightly larger on hover */
}

.device .device-status {
  font-size: 14px;
  margin-top: 10px; /* Margin below the button */
}

.device:hover {
  transform: translateY(-10px); /* Lift effect on hover */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}
</style>
