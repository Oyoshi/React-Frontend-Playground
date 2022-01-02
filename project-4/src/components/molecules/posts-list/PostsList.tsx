import { FC } from "react";
import styled from "styled-components";
import { List, Spin } from "antd";
import Avatar from "react-avatar";
import { CARD_LIST_BACKGROUND } from "styles/palette";
import { Post } from "api";

const Container = styled.div`
  padding: 24px;
  background: ${CARD_LIST_BACKGROUND};
`;

type PostsListProps = {
  posts: Post[];
  loading: boolean;
};

export const PostsList: FC<PostsListProps> = ({ posts, loading }) => (
  <Container>
    <Spin spinning={loading}>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 10,
        }}
        dataSource={posts}
        renderItem={(item: any) => (
          <List.Item key={`LIST_ITEM_${item.id}`}>
            <List.Item.Meta
              avatar={<Avatar size="75" name={item.userName} round />}
              title={item.title}
            />
            {item.body}
          </List.Item>
        )}
      />
    </Spin>
  </Container>
);
