"use client";
import { postBlog } from "@/routes/blogRoutes";
import { useState } from "react";

export default function New() {
  const [submitMsg, setSubmitMsg] = useState("");

  const handleSubmit = async () => {
    const data = {
      _id: "",
      title: "n",
      content: submitMsg,
      author: "zl",
    };

    try {
      const response = await postBlog(data);
      console.log(response);
      setSubmitMsg("Your blog post has been submitted!");
    } catch (error) {
      console.error("Error:", error);
      setSubmitMsg("Failed to submit your blog post.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-8">
      <h1 className="text-3xl font-bold">Make a new blog</h1>
      <input
        value={submitMsg}
        onChange={(e) => setSubmitMsg(e.target.value)}
        placeholder="start writing here"
        className="border-4 border-zinc-600 rounded-md w-full h-16 justify-center p-4 flex-col flex"
      ></input>
      <button
        onClick={handleSubmit}
        className="px-4 py-2 border-2 border-slate-600 rounded-md duration-200 hover:border-slate-200 hover:text-slate-200"
      >
        Post
      </button>
    </div>
  );
}
