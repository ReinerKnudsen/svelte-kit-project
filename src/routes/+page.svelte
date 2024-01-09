<script>
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';

	const handleClick = () => {
		goto('/products');
	};

	beforeNavigate((navigation) => {
		console.log({ before: navigation });
	});

	afterNavigate((navigation) => {
		console.log({ after: navigation });
	});
</script>

<h1>Reiners Svelte Kit Projekt</h1>
<a href="/blog">Blog</a>
<a href="/products">Products</a>
<div>
	<button on:click={handleClick}>Place order</button>
</div>
