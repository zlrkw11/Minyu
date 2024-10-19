"use client";

import { getBlogs } from "@/routes/blogRoutes";
import { Blog } from "@/schemas/Blog";
import { useEffect, useState } from "react";

export default function TestPageClient() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    getBlogs().then((blogs) => setBlogs(blogs));
  }, []);

  return (
    <div>
      <h1>Test Page</h1>
      <p>This is a test page.</p>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <p>Author: {blog.author}</p>
        </div>
      ))}
    </div>
  );
}
