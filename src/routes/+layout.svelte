<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>

<slot />

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
