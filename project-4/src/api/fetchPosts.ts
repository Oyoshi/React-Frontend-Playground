import axios from "axios";
import { FetchPostsResponse, PostRaw, Post } from "./post.interface";
import { UsersDict } from "./user.interface";

export const fetchPosts: (
  users: UsersDict,
  request?: any
) => Promise<FetchPostsResponse> = async (users: UsersDict, request?: any) => {
  if (Object.keys(users).length === 0) {
    return { posts: [] };
  }
  const postsRaw = await axios
    .get<PostRaw[]>(
      `https://jsonplaceholder.typicode.com/posts?q=${request || ""}`
    )
    .then((response) => response.data)
    .then((data) => data);
  return {
    posts: postsRaw.map((post: PostRaw) =>
      transformRawPostsResponse(post, users[post.userId])
    ),
  };
};

const transformRawPostsResponse = (post: PostRaw, user: string): Post => {
  const { id, title, body } = post;

  return {
    id,
    title,
    body,
    userName: user,
  };
};
