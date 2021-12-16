import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		text: 'Svelte tutorial'
	}
});

export default app;