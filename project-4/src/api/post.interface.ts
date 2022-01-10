interface PostBase {
  id: number;
  title: string;
  body: string;
}

export interface PostRaw extends PostBase {
  userId: number;
}

export interface Post extends PostBase {
  name: string;
}

export interface FetchPostsRequest {
  q?: string;
  _sort?: string;
  _order?: string;
  userId?: string;
}

export interface FetchPostsResponse {
  posts: Post[];
}
