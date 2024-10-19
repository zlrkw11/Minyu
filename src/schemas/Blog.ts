import zodSchema from "@zodyac/zod-mongoose";
import mongoose from "mongoose";
import { z } from "zod";

export const BlogSchema = z.object({
  _id: z.string(),
  title: z.string(),
  content: z.string(),
  author: z.string(),
});

export type Blog = z.infer<typeof BlogSchema>;

export const BlogModel =
  mongoose.models?.Blog ?? mongoose.model<Blog>("Blog", zodSchema(BlogSchema));
