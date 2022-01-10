import { FC } from "react";
import styled from "styled-components";
import { Input, Col, Row, Select } from "antd";
import { UsersDict } from "api";
import { TOption, SORT_OPTIONS, SORT_ORDER_OPTIONS } from "./SearchBar.const";

const { Option } = Select;

const Container = styled.div`
  padding: 16px 0;
`;

type SearchBarProps = {
  users: UsersDict;
  onSearch: (search: string) => void;
  onSort: (sort: string) => void;
  onSortOrder: (sortOrder: string) => void;
  onUser: (userId: string) => void;
};

export const SearchBar: FC<SearchBarProps> = ({
  users,
  onSearch,
  onSort,
  onSortOrder,
  onUser,
}) => (
  <Container>
    <Input.Group>
      <Row gutter={[8, 8]}>
        <Col xs={24} sm={24} md={6}>
          <Input
            placeholder="Search by post content"
            onChange={(e) => onSearch(e.target.value)}
          />
        </Col>
        <Col xs={24} sm={24} md={6}>
          <Select style={{ width: "100%" }} onChange={onSort}>
            {SORT_OPTIONS.map((opt: TOption, idx: number) => (
              <Option value={opt.value} key={`OPTION_${idx}`}>
                {opt.title}
              </Option>
            ))}
          </Select>
        </Col>
        <Col xs={24} sm={24} md={6}>
          <Select style={{ width: "100%" }} onChange={onSortOrder}>
            {SORT_ORDER_OPTIONS.map((opt: TOption, idx: number) => (
              <Option value={opt.value} key={`OPTION_${idx}`}>
                {opt.title}
              </Option>
            ))}
          </Select>
        </Col>
        <Col xs={24} sm={24} md={6}>
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
