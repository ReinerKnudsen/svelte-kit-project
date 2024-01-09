<script>
	import { page } from '$app/stores';
	console.log($page.params.slug);

	const slugArray = $page.params.slug.split('/');
</script>

<h1>Docs Home Page</h1>

{#if slugArray.length === 1}
	<h2>Documents for feature {slugArray[0]}</h2>
{:else if slugArray.length === 2}
	<h2>Documents for concept {slugArray[1]} of product {slugArray[0]}</h2>
{/if}
