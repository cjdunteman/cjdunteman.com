// 1. Import utilities from `astro:content`
import { defineCollection, getCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 2. Import loader(s)
import { file } from 'astro/loaders';

// 3. Define your collection(s)
const notes = defineCollection({ 
    loader: glob({ pattern: "**/*.md", base: "./notes" }),
    schema: z.object({
        isDraft: z.boolean(),
        isPrivate: z.boolean(),
        title: z.string(),
        // sortOrder: z.number(),
        // image: z.object({
        //   src: z.string(),
        //   alt: z.string(),
        // }),
        // author: z.string().default('Anonymous'),
        // language: z.enum(['en', 'es']),
        tags: z.array(z.string()).optional(),
        // footnote: z.string().optional(),
    
        // In YAML, dates written without quotes around them are interpreted as Date objects
        publishDate: z.string().or(z.date()).transform((str) => new Date(str)).optional(), // e.g. 2024-09-17
    
        // Transform a date string (e.g. "2022-07-08") to a Date object
        updatedDate: z.string().or(z.date()).transform((str) => new Date(str)),
    
        // authorContact: z.string().email(),
        // canonicalURL: z.string().url(),

      }),
});

const posts = defineCollection({ 
    loader: glob({ pattern: "**/*.md", base: "./blog" }),
    schema: z.object({
        isDraft: z.boolean(),
        title: z.string(),
        publishDate: z.string().or(z.date()).transform((str) => new Date(str)).optional(),
        updatedDate: z.string().or(z.date()).transform((str) => new Date(str)),
    })
 });

// 3. Export a function to get the collection with filtering
export const getNotes = async () => {
    const notesCollection = await getCollection('notes');
    return notesCollection.filter(note => !note.data.isPrivate);
};

// 4. Export a single `collections` object to register your collection(s)
export const collections = { notes, posts };
