import { cache } from "react";
import { request } from "graphql-request";
import {
  homePageQuery,
  postDetailsQuery,
  postsPathQuery,
  postsQuery,
} from "./query";
const graphqlUrl = process?.env?.NEXT_PUBLIC_GRAPHQL_URL;

const loadHomePage = cache(async () => {
  const query = homePageQuery;
  const variables = {};
  try {
    const response = await request(graphqlUrl, query, variables);
    return response?.homePage;
    console.log(response)
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    return null;
  }
});

const loadPosts = cache(async () => {
  const query = postsQuery;
  const variables = {};
  try {
    const response = await request(graphqlUrl, query, variables);
    return response?.posts;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    return null;
  }
});

const loadPostDetails = cache(async (slug) => {
  const query = postDetailsQuery;
  const variables = {
    slug,
  };
  try {
    const response = await request(graphqlUrl, query, variables);
    return response?.posts?.data[0];
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    return null;
  }
});

const loadPostsPath = cache(async () => {
  const query = postsPathQuery;
  const variables = {};
  try {
    const response = await request(graphqlUrl, query, variables);
    return response?.posts?.data;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    return null;
  }
});

export { loadHomePage, loadPosts, loadPostDetails, loadPostsPath };