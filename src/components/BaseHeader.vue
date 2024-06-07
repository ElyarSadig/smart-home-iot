<script setup></script>

<template>
  <div class="tabs">
    <button class="active">Living room</button>
    <button>Bedroom</button>
    <button>Dining room</button>
    <button>Kitchen</button>
    <button>Entrance</button>
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
  justify-content: space-between; /* Distribute space evenly */
  gap: 10px; /* Space between buttons */
  padding: 10px; /* Optional padding around the buttons container */
  flex-wrap: wrap; /* Allows buttons to wrap in smaller screens */
}

.tabs button {
  flex: 1; /* Allows buttons to scale evenly */
  padding: 10px 20px;
  background-color: #333;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 5px; /* Small margin for better spacing */
  min-width: 100px; /* Minimum width to maintain readability */
  box-sizing: border-box; /* Ensure padding and border are included in element's total width */
  margin-bottom: 30px;
}

.tabs button:hover {
  background-color: #555; /* Hover effect */
}

.tabs button.active {
  background-color: #00aaff; /* Active button color */
}
</style>
