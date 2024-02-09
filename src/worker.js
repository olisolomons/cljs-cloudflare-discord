import { handler } from '../out/cljs-cf';

export default {
	async fetch(request, env, ctx) {
		return new Response(handler(request, env, ctx));
	},
};
