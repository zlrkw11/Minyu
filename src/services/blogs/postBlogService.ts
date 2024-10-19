import { Blog, BlogModel, BlogSchema } from "@/schemas/Blog";

export default async function postBlogService(blog: Blog) {
  const createdBlog = await BlogModel.create(BlogSchema.parse(blog));
  return BlogSchema.parse(createdBlog);
}
