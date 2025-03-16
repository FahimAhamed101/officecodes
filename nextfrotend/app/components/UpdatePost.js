import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import useStore from '../store/useStore';

const UPDATE_POST = gql`
  mutation UpdatePost($id: ID!, $title: String!, $content: String!, $published: Boolean!) {
    updatePost(input: { where: { id: $id }, data: { title: $title, content: $content, published: $published } }) {
      post {
        id
        title
        content
        published
      }
    }
  }
`;

export default function UpdatePost({ post }) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [published, setPublished] = useState(post.published);
  const [updatePost] = useMutation(UPDATE_POST);
  const { updatePost: updatePostInStore } = useStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await updatePost({ variables: { id: post.id, title, content, published } });
    updatePostInStore(post.id, data.updatePost.post);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
      <label>
        <input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} />
        Published
      </label>
      <button type="submit">Update Post</button>
    </form>
  );
}