import zodSchema from "@zodyac/zod-mongoose";
import mongoose from "mongoose";
import { z } from "zod";

export const BlogSchema = z.object({
  _id: z.coerce.string(),
  title: z.string(),
  content: z.string(),
  author: z.string(),
});

export type Blog = z.infer<typeof BlogSchema>;

export const NewBlogSchema = BlogSchema.omit({ _id: true });

export type NewBlog = z.infer<typeof NewBlogSchema>;

export const BlogModel =
  mongoose.models?.Blog ??
  mongoose.model<NewBlog>("Blog", zodSchema(NewBlogSchema));