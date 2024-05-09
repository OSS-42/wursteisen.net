<template>
	<div class="about-me-container">
	  <img src="@/assets/logo.svg" alt="Profile Image" class="profile-img">
	  <div class="about-me-text">
		<h2>About Eric Wursteisen</h2>
		<p>Here is a detailed description about Eric Wursteisen. This biography might include personal insights, professional achievements, and other interesting facts that provide a comprehensive view of his personality and expertise.</p>
		<p>Further details can follow, structured in whichever way suits the narrative. This section can be quite lengthy and detailed, covering various aspects of professional and personal life.</p>
	  </div>
	</div>
  </template>
  
  <script>
  export default {
	name: 'AboutMeEN'
  }
  </script>
  
  <style scoped>
  .about-me-container {
	display: flex;
	align-items: center;
	padding: 20px;
  }
  
  .profile-img {
	width: 150px;
	height: auto;
	margin-right: 20px;
  }
  
  .about-me-text {
	flex: 1;
	text-align: left;
  }
  </style>
  