"use client";

import { getBlogs, postBlog } from "@/routes/blogRoutes";
import { Blog, NewBlog } from "@/schemas/Blog";
import { useEffect, useState } from "react";

export default function TestPageClient() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    getBlogs().then((blogs) => setBlogs(blogs));
  }, []);

  async function addBlog() {
    const newBlog: NewBlog = {
      title: "New Blog",
      content: "This is a new blog.",
      author: "John Doe",
    };
    setBlogs([...blogs, { ...newBlog, _id: "TEMP_ID" }]);
    const createdBlog = await postBlog(newBlog);
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog: Blog) => {
        if (blog._id === "TEMP_ID") {
          return createdBlog;
        }
        return blog;
      })
    );
  }

  return (
    <div>
      <h1>Test Page</h1>
      <p>This is a test page.</p>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <p>Author: {blog.author}</p>
          <p>ID: {blog._id}</p>
        </div>
      ))}
      <button onClick={addBlog}>Add Blog!</button>
    </div>
  );
}
