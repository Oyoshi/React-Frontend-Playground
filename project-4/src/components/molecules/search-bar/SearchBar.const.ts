export type TOption = {
  value: string;
  title: string;
};

export const SORT_OPTIONS: TOption[] = [
  {
    value: "id",
    title: "Default",
  },
  {
    value: "userId",
    title: "User",
  },
  {
    value: "title",
    title: "Title",
  },
];

export const SORT_ORDER_OPTIONS: TOption[] = [
  {
    value: "asc",
    title: "Ascending",
  },
  {
    value: "desc",
    title: "Descending",
  },
];
