import { FC, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Layout, Typography } from "antd";
import { SearchBar, PostsList } from "components/molecules";
import { Post, fetchPosts } from "api";

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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const getPosts = useCallback(() => {
    setIsLoading(true);
    fetchPosts()
      .then((response) => {
        setPosts(response.posts);
      })
      .catch((error) => {
        console.error("Error during data fetching: ", error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(getPosts, [getPosts]);

  return (
    <Container>
      <SearchBar />
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
