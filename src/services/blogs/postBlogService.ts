import { BlogModel, BlogSchema, NewBlog, NewBlogSchema } from "@/schemas/Blog";

export default async function postBlogService(blog: NewBlog) {
  const createdBlog = await BlogModel.create(NewBlogSchema.parse(blog));
  return BlogSchema.parse(createdBlog);
}
