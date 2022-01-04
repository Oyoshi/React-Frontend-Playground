import { FC, useState, useEffect, useCallback, useMemo } from "react";
import { debounce } from "lodash";
import styled from "styled-components";
import { Layout, Typography } from "antd";
import { SearchBar, PostsList } from "components/molecules";
import { Post, fetchPosts, fetchUsers, UsersDict } from "api";
import { isEmpty } from "lodash";

const { Content } = Layout;
const { Title } = Typography;

const Container = styled(Content)`
  padding: 0 50px;
`;

const ErrorMessageContainer = styled.div`
  text-align: center;
`;

const DEBOUNCE_DURATION_IN_MS = 300;

export const PageContent: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isPostsLoading, setIsPostsLoading] = useState<boolean>(true);
  const [postsError, setPostsError] = useState<any>(null);
  const [users, setUsers] = useState<UsersDict>({});
  const [isUsersLoading, setIsUsersLoading] = useState<boolean>(true);
  const [usersError, setUsersError] = useState<any>(null);
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [sortOrder, setSortOrder] = useState<string | undefined>(undefined);
  const [userId, setUserId] = useState<string | undefined>(undefined);

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
    fetchPosts(users, { q: search, _order: sortOrder, userId: userId })
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
  }, [users, search, sortOrder, userId]);

  const error = postsError || usersError;
  const isLoading = isPostsLoading || isUsersLoading;

  useEffect(getUsers, [getUsers]);
  useEffect(getPosts, [getPosts]);

  const handleSearchPhrase = useCallback((search: string) => {
    setSearch(isEmpty(search) ? undefined : search);
  }, []);

  const handleSearchDebounced = useMemo(
    () => debounce(handleSearchPhrase, DEBOUNCE_DURATION_IN_MS),
    [handleSearchPhrase]
  );

  const handleSortOrder = (sortOrder: string) => {
    setSortOrder(isEmpty(sortOrder) ? undefined : sortOrder);
  };

  const handleUserId = (userId: string) => {
    setUserId(isEmpty(userId) ? undefined : userId);
  };

  return (
    <Container>
      <SearchBar
        users={users}
        onSearch={handleSearchDebounced}
        onSortOrder={handleSortOrder}
        onUser={handleUserId}
      />
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
