<template>
	 <div class="card" :class="{ 'no-hover': !hoverEffect, 'hover-effect': hoverEffect }" @click="handleClick">
		<div class="card-content">
			<img v-if="iconSrc" :src="iconSrc" alt="Icon" class="card-icon">
			<p class="line-one"><slot name="line1"></slot></p>
      		<p class="line-two"><slot name="line2"></slot></p>
			<p class="line-two"><slot name="line3"></slot></p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Card',
		props: {
			iconSrc: {
			type: String,
			default: ''
			},
			hoverEffect: {
			type: Boolean,
			default: false
			},
			clickable: {
			type: Boolean,
			default: false
			},
			onClick: {
			type: Function,
			default: null
			},
			id: {
			type: String,
			required: true
			},
		},
		data() {
			return {
			expanded: false,
			};
		},
		methods: {
			handleClick() {
				if (this.clickable) {
					console.log("Tile clicked");
					if (this.id === '6') {
						this.$emit('downloadFile');
					} else if (this.id === '7') {
						this.$emit('switchLanguage');
					} else {
						this.$emit('click');
					}
				}
			},
		}
	};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"');
  @import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"');

  .card {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	border-width: 1px;
	border-style: solid;
	border-color: rgba(255, 255, 255, 0.5);
	background-color: rgba(255, 255, 255, 0.1);
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	padding: 10px;
	transition: transform 0.3s;
	width: 100%;
	height: 150px;
	/* overflow: auto; */
  }

  .card-content {
	text-align: center;
	white-space: pre-wrap;
  }

  .card-icon {
	margin-top: 5px;
	width: 50px; /* Adjust width as needed */
	height: 50px; /* Adjust height as needed */
  }

  .card.no-hover:hover {
    transform: none;
  }
  
  /* .card:hover {
	transform: scale(1.1);
	border-color: rgba(255, 255, 255, 1);
	border-width: 2px;
  } */

  .card.hover-effect:hover {
	transform: scale(1.1);
	border-color: rgba(255, 255, 255, 1);
	border-width: 2px;
  }

  .line-one {
	font-size: 30px; /* Adjust size */
	color: white;
	font-family: Urbanist;
	font-weight: 300;
  }

  .line-two {
  	font-size: 20px; /* Adjust size */
	color: white;
	font-family: Urbanist;
	font-weight: 100;
  }
</style>
  