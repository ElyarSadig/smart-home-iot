<template>
  <div class="temperature-humidity">
    <div class="temperature">
      <i class="fas fa-thermometer-half"></i>
      <span class="temp-value">+ 20 °C</span>
    </div>
    <div class="humidity">
      <i class="fas fa-tint"></i>
      <span class="hum-value">30%</span>
    </div>
  </div>
</template>
<style scoped>
.temperature-humidity {
  display: flex;
  gap: 20px;
  flex: 1;
  justify-content: space-around; /* Even space distribution */
  padding: 10px; /* Padding around the container */
  border-radius: 15px; /* Smooth rounded corners */
  background: #242424; /* Dark background */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  transition: transform 0.3s ease; /* Smooth transition effect */
}

.temperature-humidity:hover {
  transform: translateY(-5px); /* Slight lift on hover */
}

.temperature,
.humidity {
  background: linear-gradient(
    135deg,
    #00aaff 0%,
    #0066cc 100%
  ); /* Gradient background */
  padding: 10px;
  border-radius: 15px; /* Smooth rounded corners */
  text-align: center;
  font-size: 24px;
  display: flex;
  flex-direction: column; /* Column layout for icon and text */
  align-items: center;
  justify-content: center;
  color: #ffffff;
  flex: 1; /* Equal width for both sections */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for depth */
  transition: background 0.3s ease; /* Smooth background transition */
}

.temperature:hover,
.humidity:hover {
  background: linear-gradient(
    135deg,
    #00bfff 0%,
    #007acc 100%
  ); /* Brighter gradient on hover */
}

.temperature i,
.humidity i {
  margin-bottom: 10px; /* Space below the icon */
  font-size: 32px; /* Icon size */
  transition: transform 0.3s ease; /* Smooth icon transition */
}

.temperature i:hover,
.humidity i:hover {
  transform: scale(1.2); /* Slight scale up on hover */
}

.temp-value,
.hum-value {
  font-size: 28px; /* Larger font size for values */
  font-weight: bold; /* Bold font */
}
</style>
