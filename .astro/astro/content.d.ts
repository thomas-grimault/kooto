declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"recettes": {
"banana-bread.md": {
	id: "banana-bread.md";
  slug: "banana-bread";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"burritos.md": {
	id: "burritos.md";
  slug: "burritos";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"carrot-cake.md": {
	id: "carrot-cake.md";
  slug: "carrot-cake";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"caviar-aubergine.md": {
	id: "caviar-aubergine.md";
  slug: "caviar-aubergine";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"chutney.md": {
	id: "chutney.md";
  slug: "chutney";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"concombre-asiatique.md": {
	id: "concombre-asiatique.md";
  slug: "concombre-asiatique";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"cookies.md": {
	id: "cookies.md";
  slug: "cookies";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"crackers.md": {
	id: "crackers.md";
  slug: "crackers";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"crumble-legume.md": {
	id: "crumble-legume.md";
  slug: "crumble-legume";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"fromage-blanc-gourmand.md": {
	id: "fromage-blanc-gourmand.md";
  slug: "fromage-blanc-gourmand";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"gaspacho-tomate.md": {
	id: "gaspacho-tomate.md";
  slug: "gaspacho-tomate";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"gateau-aux-fruits.md": {
	id: "gateau-aux-fruits.md";
  slug: "gateau-aux-fruits";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"gateau-citron-pavot.md": {
	id: "gateau-citron-pavot.md";
  slug: "gateau-citron-pavot";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"gateau-fondant-chocolat-coco.md": {
	id: "gateau-fondant-chocolat-coco.md";
  slug: "gateau-fondant-chocolat-coco";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"lasagnes.md": {
	id: "lasagnes.md";
  slug: "lasagnes";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"le-pain.md": {
	id: "le-pain.md";
  slug: "le-pain";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"moussaka-vegetarienne.md": {
	id: "moussaka-vegetarienne.md";
  slug: "moussaka-vegetarienne";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"mousse-chocolat.md": {
	id: "mousse-chocolat.md";
  slug: "mousse-chocolat";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"poire-au-four.md": {
	id: "poire-au-four.md";
  slug: "poire-au-four";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"poireaux-vinaigrette.md": {
	id: "poireaux-vinaigrette.md";
  slug: "poireaux-vinaigrette";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"pomme-caramel.md": {
	id: "pomme-caramel.md";
  slug: "pomme-caramel";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"risotto-epeautre.md": {
	id: "risotto-epeautre.md";
  slug: "risotto-epeautre";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"salade-grecque.md": {
	id: "salade-grecque.md";
  slug: "salade-grecque";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"scarpaccia-courgette.md": {
	id: "scarpaccia-courgette.md";
  slug: "scarpaccia-courgette";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"soupe-champignon.md": {
	id: "soupe-champignon.md";
  slug: "soupe-champignon";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"tartiflette.md": {
	id: "tartiflette.md";
  slug: "tartiflette";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"tartinade-oignon.md": {
	id: "tartinade-oignon.md";
  slug: "tartinade-oignon";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"verrine-melon-feta.md": {
	id: "verrine-melon-feta.md";
  slug: "verrine-melon-feta";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
"vinaigrette-asiatique.md": {
	id: "vinaigrette-asiatique.md";
  slug: "vinaigrette-asiatique";
  body: string;
  collection: "recettes";
  data: InferEntrySchema<"recettes">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
