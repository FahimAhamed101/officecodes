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
   slug
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
   
     
    
        title
        shortDescription
        content
        image {
           
               
                    url
                
          
        }
 
     
   
  }
}
`;

const postsPathQuery = `
  query GetPostsPath{
    posts {
      
       
        
            slug
        
      
    }
  }
`;

export { homePageQuery, postsQuery, postDetailsQuery, postsPathQuery };