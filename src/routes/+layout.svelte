<script>
	import '../index.css'
	export let data;
</script>

<header>
	<h1><span class="accent">spacetraders.io</span> - Welcome, Captain <span class="accent" title="{data.id}">{data.title}</span></h1>
</header>

<slot />