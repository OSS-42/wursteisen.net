<template>
	<div class="modal" :class="{ 'visible': isVisible }" @click="handleOverlayClick">
	  <div class="modal-content" @click.stop>
		<button class="close-btn" @click="closeModal">&times;</button>
		<slot></slot>
	  </div>
	</div>
</template>
  
<script>
	export default {
	name: "expandingTile",
	props: {
		isVisible: Boolean
	},
	methods: {
		closeModal() {
		this.$emit('close');
		},
		handleOverlayClick() {
		this.closeModal();  // Call closeModal when the overlay is clicked
		}
	}
	};
</script>
  
<style scoped>
  .modal {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	visibility: hidden;
	opacity: 0;
	transition: opacity 0.5s ease, visibility 0.5s ease;
	z-index: 10;
	background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
	position: relative;
	background-color: #5b5b5b;
	border-radius: 5px;
	padding: 20px;
	font-family: Urbanist;
	font-weight: 300;
	font-size: 24px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	z-index: 11;
  }
  
  .close-btn {
	position: absolute;
	top: 10px;
	right: 10px;
	border: none;
	background: none;
	font-size: 20px;
	cursor: pointer;
  }
  
  .modal.visible {
	visibility: visible;
	opacity: 1;
  }
</style>
  