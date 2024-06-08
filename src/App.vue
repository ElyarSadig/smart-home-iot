<script setup></script>

<template>
  <base-sidebar></base-sidebar>
  <div class="main-content">
    <router-view></router-view>
  </div>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #121212;
  color: #ffffff;
}
.main-content {
  margin-left: 250px;
  padding: 20px;
}
</style>
