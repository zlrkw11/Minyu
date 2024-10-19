"use client";

import { getBlogs, postBlog } from "@/routes/blogRoutes";
import { Blog } from "@/schemas/Blog";
import { useEffect, useState } from "react";

export default function TestPageClient() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    getBlogs().then((blogs) => setBlogs(blogs));
  }, []);

  function addBlog() {
    const newBlog: Blog = {
      _id: "TEMP_ID",
      title: "New Blog",
      content: "This is a new blog.",
      author: "John Doe",
    }
    setBlogs([...blogs, newBlog]);
    postBlog(newBlog).then((createdBlog) => {
      setBlogs((prevBlogs) => prevBlogs.map((blog) => {
        if (blog._id === "TEMP_ID") {
          return createdBlog;
        }
        return blog;
      }));
    });
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
        </div>
      ))}
      <button onClick={addBlog}>Add Blog!</button>
    </div>
  );
}
