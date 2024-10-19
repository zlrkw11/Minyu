import zodSchema from "@zodyac/zod-mongoose";
import { model } from "mongoose";
import { z } from "zod";

export const BlogSchema = z.object({
  _id: z.string(),
  title: z.string(),
  content: z.string(),
  author: z.string(),
});

export type Blog = z.infer<typeof BlogSchema>;

export const BlogModel = model<Blog>("Blog", zodSchema(BlogSchema));
