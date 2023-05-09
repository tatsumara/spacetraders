<script>
	export let data;
</script>

<h2>Ships</h2>
<div class="box-container">
	{#each data.data as ship}
	<div class="box">
		<span class="accent">{ship.symbol}</span>
		<p>Location: {ship.nav.waypointSymbol}</p>
		<p>Status: {ship.nav.status}</p>
		<p>Flight mode: {ship.nav.flightMode}</p>
	</div>
{/each}
</div>