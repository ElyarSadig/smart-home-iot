<script setup>
import BaseHeader from "@/components/BaseHeader.vue";
import DeviceComp from "@/components/DeviceComp.vue";
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
        <div class="temperature-humidity">
          <div class="temperature">
            <i class="fas fa-thermometer-half"></i> + 20 °C
          </div>
          <div class="humidity"><i class="fas fa-tint"></i> 30%</div>
        </div>
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
          <div class="schedule">
            <span><i class="fas fa-clock"></i> Schedule</span>
            <label for="schedule-from">From:</label>
            <input type="time" id="schedule-from" value="17:55" />
            <label for="schedule-to">To:</label>
            <input type="time" id="schedule-to" value="22:55" />
          </div>
          <div class="energy-saving">
            <span><i class="fas fa-bolt"></i> Total energy saving: </span>
            <span>45.6 KWH</span>
          </div>
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

.temperature-humidity {
  display: flex;
  gap: 20px;
  flex: 1;
}

.temperature,
.humidity {
  background-color: #00aaff; /* Light blue background */
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  flex: 1; /* Make them take equal width */
  box-sizing: border-box;
}

.temperature i,
.humidity i {
  margin-right: 10px;
  font-size: 32px; /* Adjust icon size as needed */
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

.schedule {
  background-color: #00aaff; /* Light blue background */
  padding: 50px;
  border-radius: 10px;
  text-align: left;
  font-size: 16px; /* Adjust as needed */
  color: #ffffff;
  flex: 1; /* Take equal height */
  display: flex;
  flex-direction: column;
  gap: 10px; /* Space between elements */
}

.schedule span:first-child {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px; /* Space below the first span */
}

.schedule i {
  margin-right: 10px;
  font-size: 24px; /* Adjust icon size as needed */
}

.schedule label {
  font-size: 14px;
  margin-bottom: 5px; /* Space below the label */
}

.schedule input[type="time"] {
  background-color: #ffffff;
  color: #333;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
}

.schedule input[type="time"]::placeholder {
  color: #999; /* Placeholder color */
}

.energy-saving {
  background-color: #00aaff; /* Light blue background */
  padding: 40px;
  border-radius: 10px;
  text-align: left;
  font-size: 16px; /* Adjust as needed */
  color: #ffffff;
  flex: 1; /* Take equal height */
}

.energy-saving span:first-child {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px; /* Space below the first span */
}

.energy-saving i {
  margin-right: 10px;
  font-size: 24px; /* Adjust icon size as needed */
}

.device-controls {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns layout */
  gap: 20px; /* Space between devices */
}
</style>
