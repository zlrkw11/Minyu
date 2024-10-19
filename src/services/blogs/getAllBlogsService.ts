import { BlogModel, BlogSchema } from "@/schemas/Blog";
import { z } from "zod";

export default async function getAllBlogsService() {
  // const rBlog = BlogSchema.parse({
  //   title: "Test",
  //   content: "Test",
  //   author: "Test",
  // });
  // const blog = new BlogModel(rBlog);
  // blog.save();

  const rawBlogs = await BlogModel.find();
  return z.array(BlogSchema).parse(rawBlogs);
}
