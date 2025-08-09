declare module "astro:actions" {
	type Actions = typeof import("/Users/cjdunteman/repos/cjdunteman.com/src/actions/index.ts")["server"];

	export const actions: Actions;
}