import { defineCollection, z } from 'astro:content';

const bts = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { bts };