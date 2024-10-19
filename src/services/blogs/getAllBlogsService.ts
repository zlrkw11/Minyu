import { BlogModel, BlogSchema } from "@/schemas/Blog";
import { z } from "zod";

export default async function getAllBlogsService() {
  const rawBlogs = await BlogModel.find();
  return z.array(BlogSchema).parse(rawBlogs);
}
