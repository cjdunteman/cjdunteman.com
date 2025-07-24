declare module "astro:actions" {
	type Actions = typeof import("/Users/cjdunteman/repos/cjdunteman.com/src/actions")["server"];

	export const actions: Actions;
}