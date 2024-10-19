"use server";

import { Blog, NewBlog } from "@/schemas/Blog";
import getAllBlogsService from "@/services/blogs/getAllBlogsService";
import postBlogService from "@/services/blogs/postBlogService";

export async function getBlogs(): Promise<Blog[]> {
  // Return all blogs in database
  return getAllBlogsService();
}

export async function postBlog(blog: NewBlog): Promise<Blog> {
  // Create a new blog in the database
  return postBlogService(blog);
}
