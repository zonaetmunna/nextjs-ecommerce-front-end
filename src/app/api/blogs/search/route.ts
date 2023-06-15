/* import { NextRequest, NextResponse } from "next/server";
import blogs from "../data.json";

export async function handleGet(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const filterBlog = blogs.filter((blog) => {
    return blog.title.toLowerCase().includes(query?.toLowerCase());
  });
  return new NextResponse.json(filterBlog);
}
 */
