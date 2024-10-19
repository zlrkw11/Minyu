"use server";

import { Blog } from "@/schemas/Blog";

export async function getBlogs(): Promise<Blog[]> {
  // Return all blogs in database
  return [];
}