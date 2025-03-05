const homePageQuery = `
  query GetHomePage{
    homePage {
      data {
        id
        attributes {
            title
        }
      }
    }
  }
`;

const postsQuery = `
  query GetPosts{
    posts {
      data {
        id
        attributes {
            title
            shortDescription
            content
            slug
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