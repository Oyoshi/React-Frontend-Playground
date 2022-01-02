import axios from "axios";
import { FetchPostsResponse, PostRaw, Post } from "./post.interface";

export const fetchPosts: (
  request?: any
) => Promise<FetchPostsResponse> = async (request?: any) => {
  const postsRaw = await axios
    .get<PostRaw[]>("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.data)
    .then((data) => data);
  const userIds = new Set(postsRaw.map(({ userId }) => userId));
  let promises = [];
  for (const id of Array.from(userIds)) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    promises.push(response);
  }

  const users: Record<number, string> = await Promise.all(promises).then(
    (responses) =>
      responses.reduce((acc, e) => ({ ...acc, [e.data.id]: e.data.name }), {})
  );
  return {
    posts: postsRaw.map((post: PostRaw) =>
      transformTemplateResponse(post, users[post.userId])
    ),
  };
};

const transformTemplateResponse = (post: PostRaw, user: string): Post => {
  const { id, title, body } = post;

  return {
    id,
    title,
    body,
    userName: user,
  };
};
