import { FC, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Layout, Typography } from "antd";
import { SearchBar, PostsList } from "components/molecules";
import { Post, fetchPosts, fetchUsers, UsersDict } from "api";

const { Content } = Layout;
const { Title } = Typography;

const Container = styled(Content)`
  padding: 0 50px;
`;

const ErrorMessageContainer = styled.div`
  text-align: center;
`;

export const PageContent: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isPostsLoading, setIsPostsLoading] = useState<boolean>(true);
  const [postsError, setPostsError] = useState<any>(null);
  const [users, setUsers] = useState<UsersDict>({});
  const [isUsersLoading, setIsUsersLoading] = useState<boolean>(true);
  const [usersError, setUsersError] = useState<any>(null);

  const getUsers = useCallback(() => {
    setIsUsersLoading(true);
    fetchUsers()
      .then((response) => {
        setUsers(response.users);
      })
      .catch((error) => {
        console.error("Error during users fetching: ", error);
        setUsersError(error);
      })
      .finally(() => {
        setIsUsersLoading(false);
      });
  }, []);

  const getPosts = useCallback(() => {
    setIsPostsLoading(true);
    fetchPosts(users)
      .then((response) => {
        setPosts(response.posts);
      })
      .catch((error) => {
        console.error("Error during posts fetching: ", error);
        setPostsError(error);
      })
      .finally(() => {
        setIsPostsLoading(false);
      });
  }, [users]);

  const error = postsError || usersError;
  const isLoading = isPostsLoading || isUsersLoading;

  useEffect(getUsers, [getUsers]);
  useEffect(getPosts, [getPosts]);

  return (
    <Container>
      <SearchBar users={users} />
      {error ? (
        <ErrorMessageContainer>
          <Title>Error during during data fetching...</Title>
        </ErrorMessageContainer>
      ) : (
        <PostsList posts={posts} loading={isLoading} />
      )}
    </Container>
  );
};
