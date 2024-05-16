<template>
	<div class="download-tile" @click="downloadFile">
	  <img :src="iconSrc" alt="Download Icon">
	  <div>
		<h3>{{ line1 }}</h3>
		<p>{{ line2 }}</p>
		<p>{{ line3 }}</p>
	  </div>
	</div>
</template>

<script>
  export default {
	name: 'DownloadTile',
	props: {
	  iconSrc: String,
	  line1: String,
	  line2: String,
	  line3: String,
	  fileUrl: String,
	  fileName: String
	},
	methods: {
	  downloadFile() {
		const link = document.createElement('a');
		link.href = this.fileUrl;
		link.setAttribute('download', this.fileName || 'download.pdf');
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	  }
	}
  }
</script>

<style scoped>
  .download-tile {
	cursor: pointer;
	display: flex;
	align-items: center;
  }
  .download-tile img {
	width: 50px; /* Adjust size accordingly */
	margin-right: 10px;
  }
</style>
