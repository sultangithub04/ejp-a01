"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const page = ({params}) => {
    const [post, setPost] = useState(null);

  const singlePost = async () => {
    try {
      const postDetails = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      );
      const data = await postDetails.json();
      setPost(data); 
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  useEffect(() => {
    if (params?.id) {
      singlePost();
    }
  }, [params]);

//   console.log(post); 3
    return (
        <div>
        {post ? (
          <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ) : (
          <p>Loading post...</p>
        )}
        <br />
        <Link href='/' className='bg-red-400 px-2 py-1 text-white'>back</Link>
      </div>
    );
};

export default page;