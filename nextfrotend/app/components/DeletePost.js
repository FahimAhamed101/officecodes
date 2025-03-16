import { gql, useMutation } from '@apollo/client';
import useStore from '../store/useStore';

const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(input: { where: { id: $id } }) {
      post {
        id
      }
    }
  }
`;

export default function DeletePost({ id }) {
  const [deletePost] = useMutation(DELETE_POST);
  const { deletePost: deletePostInStore } = useStore();

  const handleDelete = async () => {
    await deletePost({ variables: { id } });
    deletePostInStore(id);
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
}