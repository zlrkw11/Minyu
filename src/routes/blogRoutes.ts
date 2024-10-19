"use server";

import { Blog } from "@/schemas/Blog";
import getAllBlogsService from "@/services/blogs/getAllBlogsService";

export async function getBlogs(): Promise<Blog[]> {
  // Return all blogs in database

  return getAllBlogsService();
}

export async function postBlog(blog: Blog): Promise<Blog> {
  return { _id: "1", title: "test", content: "testing blog", author: "zl" };
}
