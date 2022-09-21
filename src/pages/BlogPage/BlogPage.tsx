import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { IPostProps } from './BlogPage.types';

export const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  console.log(useLocation());

  useEffect(() => {
    try {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => setPosts(data));
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  }, []);

  return (
    <div>
      <h1>Blog Page</h1>
      <div>
        {posts.map((post: IPostProps) => (
          <Link
            key={post.id}
            to={`/blog/post/${post.id}`}
          >
            <li>{post.title}</li>
          </Link>
        ))}
      </div>
    </div>
  );
};
