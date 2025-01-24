"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const loadData = async () => {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await resp.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    loadData(); // Call the function when the component mounts
  }, []);

  console.log(posts); // Logs the posts to the console

  return (

    <div>
    <h3 className="text-2xl font-bold my-4">Posts</h3>
    <ul className="space-y-2">
      {posts.map((post) => (
        <li key={post.id} className="hover:text-red-400">
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
         
        </li>
      ))}
    </ul>
  
  </div>
  );
}
