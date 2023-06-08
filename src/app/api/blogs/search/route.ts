import { NextResponse } from "next/server";
import blogs from '../data.json';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    const filterBlog = blogs.filter((blog) => {
        return blog.title.toLowerCase().includes(query.toLocaleLowerCase())
    });
    return NextResponse.json(blogs)
}