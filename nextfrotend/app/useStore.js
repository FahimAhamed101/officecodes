import create from 'zustand';
import produce from 'immer';

const useStore = create((set) => ({
  posts: [],
  setPosts: (posts) => set(produce((state) => { state.posts = posts; })),
  addPost: (post) => set(produce((state) => { state.posts.push(post); })),
  updatePost: (id, updatedPost) => set(produce((state) => {
    const index = state.posts.findIndex((post) => post.id === id);
    if (index !== -1) state.posts[index] = updatedPost;
  })),
  deletePost: (id) => set(produce((state) => {
    state.posts = state.posts.filter((post) => post.id !== id);
  })),
}));

export default useStore;