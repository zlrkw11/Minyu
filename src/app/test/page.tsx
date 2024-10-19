import { getBlogs } from "@/routes/blogRoutes";

export default async function TestPageServer() {
  const blogs = await getBlogs();

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
