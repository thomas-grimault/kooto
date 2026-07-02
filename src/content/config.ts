import { defineCollection, z } from 'astro:content';

const ingredientSchema = z.object({
  nom: z.string(),
  quantite: z.string().optional(),
});

const recettes = defineCollection({
  type: 'content',
  schema: z.object({
    titre: z.string(),
    personnes: z.number().default(50),
    ingredients: z.array(ingredientSchema).default([]),
    categorie: z.string().optional(),
  }),
});

export const collections = { recettes };
