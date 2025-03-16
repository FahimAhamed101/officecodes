import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import useStore from '../useStore';

const CREATE_POST = gql`
  mutation CreatePost($title: String!, $content: String!, $published: Boolean!) {
    createPost(input: { data: { title: $title, content: $content, published: $published } }) {
      post {
        id
        title
        content
        published
      }
    }
  }
`;

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [published, setPublished] = useState(false);
  const [createPost] = useMutation(CREATE_POST);
  const { addPost } = useStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await createPost({ variables: { title, content, published } });
    addPost(data.createPost.post);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
      <label>
        <input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} />
        Published
      </label>
      <button type="submit">Create Post</button>
    </form>
  );
}