import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { IPostResponse } from './Post.types';

export const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState<IPostResponse | null>(null);
  const navigate = useNavigate();

  const backBtn = () => navigate('/blog', { state: { somevalue: 'dude', id: 111 } });
  const homeBtn = () => navigate('/', { replace: true });

  useEffect(() => {
    try {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => setPost(data));
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  }, [id]);

  return (
    <>
      {post ? (
        <div>
          <button onClick={backBtn}>Back</button>
          <button onClick={homeBtn}>Home</button>
          <h1>Post id: {id}</h1>
          <h4>{post.title}</h4>
        </div>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};
