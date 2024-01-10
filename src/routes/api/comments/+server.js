import { json } from '@sveltejs/kit';
import { comments } from '$lib/comments.js';

export function GET() {
	return json(comments);

	// Without the Svelte json extension:
	/*
	return new Response(JSON.stringify(comments), {
		headers: { 'Content-Type': 'application/json' }
	});*/
}

export async function POST(requestEvent) {
	const { request } = requestEvent;
	const { text } = await request.json();
	const newComment = {
		id: comments.length + 1,
		text
	};
	console.log(newComment);
	comments.push(newComment);
	return json(newComment, { status: 201 });
}
