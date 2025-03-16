import { gql, useQuery } from '@apollo/client';
import useStore from '../useStore';
import { useEffect } from 'react';
import CreatePost from '../components/CreatePost';
import UpdatePost from '../components/UpdatePost';
import DeletePost from '../components/DeletePost';
const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      content
      published
    }
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(GET_POSTS);
  const { posts, setPosts } = useStore();

  useEffect(() => {
    if (data) {
      setPosts(data.posts);
    }
  }, [data, setPosts]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <CreatePost />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <UpdatePost post={post} />
            <DeletePost id={post.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}