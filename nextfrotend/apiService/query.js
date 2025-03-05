const homePageQuery = `
  query GetHomePage{
     homePage {
    title
  }
  }
`;

const postsQuery = `
  query GetPosts{
   posts {
    documentId
    title
    content
    shortDescription
   
    createdAt
    updatedAt
    publishedAt
    image {
      url
    }
  }
  }
`;

const postDetailsQuery = `
query GetPostDetail($slug: String) {
  posts(filters: { slug: { eq: $slug }}) {
    data {
      id
      attributes {
        title
        shortDescription
        content
        image {
            data {
                attributes {
                    url
                }
            }
        }
 
     }
    }
  }
}
`;

const postsPathQuery = `
  query GetPostsPath{
    posts {
      data {
        id
        attributes {
            slug
        }
      }
    }
  }
`;

export { homePageQuery, postsQuery, postDetailsQuery, postsPathQuery };