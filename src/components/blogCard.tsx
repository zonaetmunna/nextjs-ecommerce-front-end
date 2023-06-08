import { IBlog } from "@/types/types";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: { blog: IBlog }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
        <p className="text-gray-600 mb-4">{blog.author}</p>
        <p className="text-gray-600">{blog.date}</p>
      </div>
      <div className="px-4 py-2 bg-gray-100">
        <p>{blog.content}</p>
        <Link href={`/blog/${blog.id}`}>
          <p className="text-blue-600">Read more</p>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
