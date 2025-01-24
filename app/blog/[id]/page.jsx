"use client";
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
      </div>
    );
};

export default page;