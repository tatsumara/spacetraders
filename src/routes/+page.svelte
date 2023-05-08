<script>
	export let data;
</script>

<h2>Ships</h2>
{#each data.data as ship}
	<div>
		<span class="accent">{ship.symbol}</span>
	</div>
{/each}