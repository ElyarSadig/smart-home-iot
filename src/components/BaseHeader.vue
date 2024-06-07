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
.main-content {
  margin-left: 250px;
  padding: 20px;
}
.content {
  padding: 20px 0;
}
.tabs {
  display: flex;
  gap: 10px;
  margin: 20px 0;
}
.tabs button {
  padding: 10px 20px;
  background-color: #333;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
}

.tabs button.active {
  background-color: #00aaff;
}
</style>
