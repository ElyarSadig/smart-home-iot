<script setup></script>

<template>
  <div class="sidebar">
    <div class="logo">SMART HOME</div>
    <nav>
      <ul>
        <li>
          <a href="#"><i class="fas fa-home"></i> Home</a>
        </li>
        <li>
          <a href="#"><i class="fas fa-desktop"></i> Devices</a>
        </li>
        <li>
          <a href="#"><i class="fas fa-bell"></i> Notification</a>
        </li>
        <li>
          <a href="#"><i class="fas fa-cog"></i> Settings</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #1e1e1e;
  position: fixed;
  display: flex;
  flex-direction: column;
}
.logo {
  font-size: 24px;
  padding: 20px;
  text-align: center;
  color: #00aaff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo img {
  margin-right: 10px;
  height: 30px; /* Adjust as needed */
}

nav {
  flex-grow: 1;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  padding: 15px 20px;
}

nav ul li a {
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: center;
}

nav ul li a i {
  margin-right: 10px;
}
</style>
