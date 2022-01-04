import { FC } from "react";
import styled from "styled-components";
import { Input, Col, Row, Select } from "antd";
import { UsersDict } from "api";

const { Option } = Select;

const Container = styled.div`
  padding: 16px 0;
`;

type SearchBarProps = {
  users: UsersDict;
  onSearch: (search: string) => void;
  onSortOrder: (sortOrder: string) => void;
  onUser: (userId: string) => void;
};

export const SearchBar: FC<SearchBarProps> = ({
  users,
  onSearch,
  onSortOrder,
  onUser,
}) => (
  <Container>
    <Input.Group>
      <Row gutter={[8, 8]}>
        <Col xs={24} sm={24} md={8}>
          <Input
            placeholder="Search by post content"
            onChange={(e) => onSearch(e.target.value)}
          />
        </Col>
        <Col xs={24} sm={24} md={8}>
          <Select style={{ width: "100%" }} onChange={onSortOrder}>
            <Option value="asc">Ascending</Option>
            <Option value="desc">Descending</Option>
          </Select>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <Select style={{ width: "100%" }} onChange={onUser}>
            {Object.entries(users).map(([key, value]) => (
              <Option value={key} key={`OPTION_${key}`}>
                {value}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
    </Input.Group>
  </Container>
);
