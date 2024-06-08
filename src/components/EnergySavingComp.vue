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
        <span>45.6</span> <span>KWH</span>
      </div>
      <div class="energy-chart">
        <div class="chart-bar" v-for="bar in chartData" :key="bar.day" :style="{ height: bar.height + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const chartData = [
  { day: 'Mon', height: 75 },
  { day: 'Tue', height: 60 },
  { day: 'Wed', height: 80 },
  { day: 'Thu', height: 50 },
  { day: 'Fri', height: 90 },
  { day: 'Sat', height: 65 },
  { day: 'Sun', height: 70 }
];
</script>

<style scoped>
.energy-saving {
  background-color: #2a2a2a; /* Darker and more neutral background */
  border-radius: 10px; /* Slightly smaller rounded corners */
  padding: 10px; /* Less padding for a more compact look */
  color: #ffffff; /* White text */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Soft shadow */
  display: flex; /* Flex layout */
  flex-direction: column; /* Vertical stacking */
  gap: 10px; /* Less gap for compactness */
  transition: transform 0.2s ease-in-out, background 0.3s ease-in-out; /* Smooth transitions */
  margin-top: 20px; /* Added margin for separation */
}

.energy-saving:hover {
  transform: translateY(-3px); /* Subtle lift effect on hover */
  background: linear-gradient(145deg, #2b2b2b 0%, #3a3a3a 100%); /* Subtle gradient on hover */
}

.energy-header {
  display: flex; /* Flex layout */
  justify-content: space-between; /* Space between title and date */
  align-items: center; /* Center vertically */
  border-bottom: 1px solid #444; /* Thin divider line */
  padding-bottom: 8px; /* Less padding for compactness */
}

.energy-title {
  font-size: 16px; /* Slightly smaller font size */
  font-weight: bold; /* Bold text */
  color: #f1c75e; /* Light yellow for emphasis */
  display: flex; /* Flex layout for icon */
  align-items: center; /* Align items */
  gap: 8px; /* Space between icon and text */
}

.energy-title i {
  font-size: 20px; /* Smaller icon size */
  color: #f1c75e; /* Icon color */
}

.energy-date {
  font-size: 12px; /* Smaller font size */
  color: #aaaaaa; /* Light gray for less emphasis */
}

.energy-details {
  display: flex; /* Flex layout */
  flex-direction: column; /* Vertical stacking */
  align-items: center; /* Center content */
  gap: 15px; /* Space between elements */
}

.energy-amount {
  font-size: 36px; /* Smaller font size for compactness */
  font-weight: bold; /* Bold text */
  color: #f1c75e; /* Light yellow for emphasis */
  display: flex; /* Flex layout */
  align-items: baseline; /* Align baseline for unit */
  gap: 4px; /* Less space between number and unit */
}

.energy-amount span:nth-child(2) {
  font-size: 18px; /* Smaller unit font size */
  color: #ffffff; /* White for unit */
}

.energy-chart {
  display: flex; /* Flex layout for bars */
  gap: 4px; /* Less space between bars */
  width: 100%; /* Full width */
  height: 80px; /* Reduced height */
  background: #444; /* Darker background for chart */
  border-radius: 6px; /* Smaller rounded corners */
  padding: 8px; /* Less padding inside chart */
  box-sizing: border-box; /* Include padding in size */
}

.chart-bar {
  flex: 1; /* Equal width for bars */
  background: linear-gradient(135deg, #f1c75e 0%, #ffeb99 100%); /* Softer gradient */
  border-radius: 4px; /* Smaller rounded corners */
  transition: height 0.2s ease-in-out, background 0.3s ease-in-out; /* Smooth transitions */
}

.chart-bar:hover {
  background: linear-gradient(135deg, #ffeb99 0%, #f1c75e 100%); /* Inverse gradient on hover */
}
</style>

