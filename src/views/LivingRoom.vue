<script setup>
import BaseHeader from "@/components/BaseHeader.vue";
import DeviceComp from "@/components/DeviceComp.vue";
import SecurityStatusComp from "@/components/SecurityStatusComp.vue";
import EnergySavingComp from "@/components/EnergySavingComp.vue";
import TemperatureHumidityComp from "@/components/TemperatureHumidityComp.vue";
const devices = [
  {
    name: "Smart Tv",
    status: "on",
    activity: "Active for 1 hour",
    icon: "fa-tv",
  },
  {
    name: "Air Conditioner",
    status: "on",
    activity: "Active for 1 hour",
    icon: "fa-snowflake",
  },
  { name: "Lights", status: "off", activity: "Inactive", icon: "fa-lightbulb" },
  {
    name: "Air Humidifier",
    status: "on",
    activity: "Active for 2 hours",
    icon: "fa-water",
  },
  {
    name: "WiFi Router",
    status: "on",
    activity: "Active for 10 hours",
    icon: "fa-wifi",
  },
  {
    name: "Speaker",
    status: "off",
    activity: "Inactive",
    icon: "fa-volume-up",
  },
];
</script>

<template>
  <base-header></base-header>
  <div class="content">
    <div class="room-info">
      <div class="left-column">
        <temperature-humidity-comp></temperature-humidity-comp>
        <div class="device-controls">
          <device-comp
            v-for="device in devices"
            :key="device.name"
            :name="device.name"
            :status="device.status"
            :activity="device.activity"
            :icon="device.icon"
          ></device-comp>
        </div>
      </div>
      <div class="right-column">
        <div class="schedule-energy">
          <security-status-comp></security-status-comp>
          <energy-saving-comp></energy-saving-comp>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.room-info {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  flex-wrap: wrap; /* Ensure wrapping on smaller screens */
}

.left-column,
.right-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.room-settings {
  display: flex;
  gap: 20px;
  width: 100%;
}

.room-settings .light-bulb {
  background-color: #333; /* Dark background for the light bulb */
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  flex: 1; /* Adjust to fill half of the room-settings height */
  border-radius: 10px;
  font-size: 48px; /* Make the icon larger */
  color: #00aaff; /* Light blue color for the icon */
}

.schedule-energy {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
}

.device-controls {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns layout */
  gap: 20px; /* Space between devices */
}
</style>
