import BlogCard from "@/components/blogCard";
import { IBlog } from "@/types/types";
import React from "react";

async function fetchBlogs() {
  const response = await fetch("http://localhost:3000/api/blogs");
  const data: IBlog[] = await response.json();
  return data;
}

export default async function Blogs() {
  const blogs = await fetchBlogs();
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
