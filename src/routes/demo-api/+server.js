// using an http verb is a convention we have to follow

// getHandlder
export function GET() {
	// the JS Response object returns a reply to a request
	return new Response('Hello from the demo API');
}
