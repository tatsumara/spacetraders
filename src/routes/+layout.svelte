<script>
	import '../index.css'
	export let data;
</script>

<header>
	<h1>spacetraders.io</h1>
	<p>welcome, captain <span class="accent">{data.title.toLowerCase()}</span></p>
	<button>Logout</button>
</header>

<slot />