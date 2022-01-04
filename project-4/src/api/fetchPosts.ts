import axios from "axios";
import { isEmpty } from "lodash";
import {
  FetchPostsResponse,
  FetchPostsRequest,
  PostRaw,
  Post,
} from "./post.interface";
import { UsersDict } from "./user.interface";
import { concatQueryParams } from "common/utils";

export const fetchPosts: (
  users: UsersDict,
  request: FetchPostsRequest
) => Promise<FetchPostsResponse> = async (
  users: UsersDict,
  request: FetchPostsRequest
) => {
  if (isEmpty(users)) {
    return { posts: [] };
  }

  const queryParams = concatQueryParams(request);
  const postsRaw = await axios
    .get<PostRaw[]>(`https://jsonplaceholder.typicode.com/posts?${queryParams}`)
    .then((response) => response.data)
    .then((data) => data);
  return {
    posts: postsRaw.map((post: PostRaw) =>
      transformRawPostsResponse(post, users[post.userId])
    ),
  };
};

const transformRawPostsResponse = (post: PostRaw, userName: string): Post => {
  const { id, title, body } = post;

  return {
    id,
    title,
    body,
    name: userName,
  };
};
