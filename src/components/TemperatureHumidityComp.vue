<script setup>
import axios from "axios";
import { ref, onMounted, computed, watch } from "vue";

const temperature = ref(0.0);
const humidity = ref(0.0);

const prevTemperature = ref(0.0);
const prevHumidity = ref(0.0);

const tempChanged = ref(false);
const humChanged = ref(false);

const formattedTemp = computed(() => {
  return temperature.value.toFixed(2);
});

const formattedHumidity = computed(() => {
  return humidity.value.toFixed(2);
});

// Calculate the density for temperature based on the given range
const tempStyle = computed(() => {
  const minTemp = 18;
  const maxTemp = 45;

  // Calculate the intensity based on the temperature range
  let intensity = Math.max(0, Math.min(100, ((temperature.value - minTemp) / (maxTemp - minTemp)) * 100));

  // Determine the color based on the temperature value
  let color = temperature.value >= 25 
    ? `hsla(0, 100%, 50%, ${intensity / 100})`  // Redder for higher temperatures
    : `hsla(210, 100%, 50%, ${(100 - intensity) / 100})`; // Bluer for lower temperatures

  return {
    background: color,
    transition: "background 1s ease-in-out",
  };
});

// Calculate the density for humidity based on the given range
const humStyle = computed(() => {
  const minHum = 19;
  const maxHum = 50;

  // Calculate the intensity based on the humidity range
  let intensity = Math.max(0, Math.min(100, ((humidity.value - minHum) / (maxHum - minHum)) * 100));

  // Determine the color based on the humidity value
  let color = humidity.value >= 30 
    ? `hsla(210, 100%, 50%, ${intensity / 100})`  // Bluer for higher humidity
    : `hsla(0, 100%, 50%, ${(100 - intensity) / 100})`; // Redder for lower humidity

  return {
    background: color,
    transition: "background 1s ease-in-out",
  };
});

const fetchAirStatus = async () => {
  try {
    const response = await axios.get("http://localhost:8080/room/1");
    const data = response.data;

    prevTemperature.value = temperature.value;
    prevHumidity.value = humidity.value;

    temperature.value = data.temperature;
    humidity.value = data.humidity;

    tempChanged.value = temperature.value !== prevTemperature.value;
    humChanged.value = humidity.value !== prevHumidity.value;
  } catch (error) {
    console.error("Error fetching room air status:", error);
  }
};

onMounted(() => {
  fetchAirStatus();
  setInterval(fetchAirStatus, 1000);
});

watch(temperature, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    tempChanged.value = true;
    setTimeout(() => {
      tempChanged.value = false;
    }, 1000);
}});

watch(humidity, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    humChanged.value = true;
    setTimeout(() => {
      humChanged.value = false;
    }, 1000);
  }
});
</script>

<template>
  <div class="temperature-humidity">
    <div
      class="temperature"
      :class="{ 'temp-updated': tempChanged }"
      :style="tempStyle"
    >
      <i class="fas fa-thermometer-half"></i>
      <span class="temp-value">+ {{ formattedTemp }} °C</span>
    </div>
    <div
      class="humidity"
      :class="{ 'hum-updated': humChanged }"
      :style="humStyle"
    >
      <i class="fas fa-tint"></i>
      <span class="hum-value">{{ formattedHumidity }}%</span>
    </div>
  </div>
</template>

<style scoped>
.temperature-humidity {
  display: flex;
  gap: 20px;
  flex: 1;
  justify-content: space-around;
  padding: 10px;
  border-radius: 15px;
  background: #242424;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;
}

.temperature-humidity:hover {
  transform: translateY(-5px);
}

.temperature,
.humidity {
  background: linear-gradient(135deg, #00aaff 0%, #0066cc 100%);
  padding: 10px;
  border-radius: 15px;
  text-align: center;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  flex: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background 1s ease-in-out, transform 0.3s ease-in-out;
}

.temperature:hover,
.humidity:hover {
  background: linear-gradient(135deg, #00bfff 0%, #007acc 100%);
}

.temperature i,
.humidity i {
  margin-bottom: 10px;
  font-size: 32px;
  transition: transform 0.3s ease-in-out;
}

.temperature i:hover,
.humidity i:hover {
  transform: scale(1.2);
}

.temp-value,
.hum-value {
  font-size: 28px;
  font-weight: bold;
  transition: transform 0.5s ease-in-out, color 0.5s ease-in-out;
}

/* Enhanced animations for value change */
.temp-updated .temp-value,
.temp-updated i,
.hum-updated .hum-value,
.hum-updated i {
  transform: scale(1.2);
  animation: number-change 1s ease-in-out;
}

@keyframes number-change {
  0% {
    transform: scale(1);
    color: #ffffff;
  }
  50% {
    transform: scale(1.2);
    color: #ffcc00;
  }
  100% {
    transform: scale(1);
    color: #ffffff;
  }
}

/* Smooth background transition for temperature */
.temperature {
  transition: background 1s ease-in-out, transform 0.3s ease-in-out;
}

/* Smooth background transition for humidity */
.humidity {
  transition: background 1s ease-in-out, transform 0.3s ease-in-out;
}

/* Temperature and Humidity Change Animation */
.temp-updated .temp-value,
.hum-updated .hum-value {
  animation: number-change 1s ease-in-out;
}
</style>

