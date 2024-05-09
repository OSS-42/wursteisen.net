<template>
	<div class="about-me-container">
	  <img src="@/assets/perso.jpeg" alt="Profile Image" class="profile-img">
	  <div class="about-me-text">
		<h2>About Eric Wursteisen</h2>
		<p>Before 2012, I used to help entrepreneurs establishing their business models, disrupting their industry either during University Projects or on my own. I also worked a year as an autonomous worker in the finance industry. This failed experience make me learned I wasn't a vendor but an adviser.</p>
		<p>When I started as an IT Project Manager it was obvious to me that I wasn't of the traditional kind. In the same year I discovered agility, and it helped me put words on my actions. It was then clear that this is the path I wanted to take in this industry.</p>
		<p>Fast forward 7 years, and here I am, an Agile Coach. For some this can be their endgame, for me, it is just another step in my journey. I still have a lot to learn either from my peers, newcomers or simply from the people I coach.</p>
		<p>However, at this stage of my career, I am also ready to share my knowledge, be it through classes, blog posts, mentoring or conferences.</p>
		<p>Stay tuned !</p>
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
	height: 150px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 20px;
}
  
  .about-me-text {
	flex: 1;
	text-align: left;
	font-family: Urbanist;
	font-size: 15px;
  }
  </style>
  