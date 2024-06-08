<template>
  <div class="security-status">
    <div class="security-header">
      <i class="fas fa-shield-alt"></i>
      <span>Security Status</span>
    </div>
    <div class="security-item">
      <i class="fas fa-door-closed"></i>
      <span>Front Door: <strong>Locked</strong></span>
    </div>
    <div class="security-item">
      <i class="fas fa-video"></i>
      <span>Camera: <strong>Active</strong></span>
    </div>
    <div class="security-item">
      <i class="fas fa-bell"></i>
      <span>Alarm: <strong>Off</strong></span>
    </div>
  </div>
</template>
<style scoped>
.security-status {
  background: linear-gradient(
    135deg,
    #333 0%,
    #555 100%
  ); /* Gradient background */
  padding: 30px;
  border-radius: 15px; /* Rounded corners */
  text-align: left;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 20px; /* Space between items */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); /* Shadow for depth */
  transition: transform 0.3s ease, background 0.3s ease; /* Smooth transitions */
}

.security-status:hover {
  transform: translateY(-5px); /* Lift effect on hover */
  background: linear-gradient(
    135deg,
    #444 0%,
    #666 100%
  ); /* Lighter gradient on hover */
}

.security-header {
  display: flex;
  align-items: center;
  gap: 15px; /* Space between icon and text */
  font-size: 24px;
  font-weight: bold;
}

.security-item {
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  padding: 15px;
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for depth */
  transition: background-color 0.3s ease; /* Smooth transition */
}

.security-item:hover {
  background-color: rgba(0, 0, 0, 0.7); /* Darker background on hover */
}

.security-item i {
  font-size: 28px; /* Icon size */
  color: #00aaff; /* Icon color */
}

.security-item span {
  font-size: 18px;
}

.security-header i {
  font-size: 32px; /* Larger icon size for header */
  color: #00aaff; /* Icon color */
}
</style>
