interface PostBase {
  id: number;
  title: string;
  body: string;
}

export interface PostRaw extends PostBase {
  userId: number;
}

export interface Post extends PostBase {
  userName: string;
}

export interface FetchPostsResponse {
  posts: Post[];
}
