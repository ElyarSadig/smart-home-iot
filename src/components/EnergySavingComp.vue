<script setup>
import axios from "axios";
import { ref, onMounted, computed, watch } from "vue";

const totalEnergySaved = ref(0.0);
const previousEnergySaved = ref(0.0);
const hasValueChanged = ref(false);

const chartData = ref([
  { day: "Mon", height: 75 },
  { day: "Tue", height: 60 },
  { day: "Wed", height: 80 },
  { day: "Thu", height: 50 },
  { day: "Fri", height: 90 },
  { day: "Sat", height: 65 },
  { day: "Sun", height: 70 },
]);

const formattedEnergySaved = computed(() => {
  return totalEnergySaved.value.toFixed(2);
});

const fetchRoomEnergySaving = async () => {
  try {
    const response = await axios.get("http://localhost:8080/room/energy-saving/1");
    const data = response.data;

    previousEnergySaved.value = totalEnergySaved.value;
    totalEnergySaved.value = parseFloat(data.total_energy_saving);

    hasValueChanged.value = totalEnergySaved.value !== previousEnergySaved.value;
  } catch (error) {
    console.error("Error fetching energy saving:", error);
  }
};

onMounted(() => {
  fetchRoomEnergySaving();
  setInterval(fetchRoomEnergySaving, 1000); // Fetch data every 1 second
});

watch(totalEnergySaved, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    hasValueChanged.value = true;
    setTimeout(() => {
      hasValueChanged.value = false;
    }, 500);
  }
});
</script>
<template>
  <div class="energy-saving">
    <div class="energy-header">
      <span class="energy-title">
        <i class="fas fa-bolt"></i> Energy Savings
      </span>
      <span class="energy-date">This Week</span>
    </div>
    <div class="energy-details">
      <div class="energy-amount">
        <span :class="{'animated-number': hasValueChanged}">{{ formattedEnergySaved }} KWH</span>
      </div>
      <div class="energy-chart">
        <div
          class="chart-bar"
          v-for="(bar) in chartData"
          :key="bar.day"
          :style="{ height: bar.height + '%' }"
        ></div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.energy-saving {
  background-color: #2a2a2a;
  border-radius: 10px;
  padding: 10px;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.2s ease-in-out, background 0.3s ease-in-out;
  margin-top: 20px;
}

.energy-saving:hover {
  transform: translateY(-3px);
  background: linear-gradient(145deg, #2b2b2b 0%, #3a3a3a 100%);
}

.energy-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #444;
  padding-bottom: 8px;
}

.energy-title {
  font-size: 16px;
  font-weight: bold;
  color: #f1c75e;
  display: flex;
  align-items: center;
  gap: 8px;
}

.energy-title i {
  font-size: 20px;
  color: #f1c75e;
}

.energy-date {
  font-size: 12px;
  color: #aaaaaa;
}

.energy-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.energy-amount {
  font-size: 36px;
  font-weight: bold;
  color: #f1c75e;
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.energy-amount span:nth-child(2) {
  font-size: 18px;
  color: #ffffff;
}

/* Number Animation */
.energy-amount .animated-number {
  animation: pop-number 0.5s ease-in-out;
}

@keyframes pop-number {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

/* Chart Animation */
.energy-chart {
  display: flex;
  gap: 4px;
  width: 100%;
  height: 80px;
  background: #444;
  border-radius: 6px;
  padding: 8px;
  box-sizing: border-box;
}

.chart-bar {
  flex: 1;
  background: linear-gradient(135deg, #f1c75e 0%, #ffeb99 100%);
  border-radius: 4px;
  transition: height 0.5s ease-in-out;
  animation: bounce-bar 0.8s ease-out; /* Bounce animation */
}

@keyframes bounce-bar {
  0%,
  100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(1.1);
  }
}
</style>


