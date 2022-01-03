import axios from "axios";
import { FetchUsersResponse, UserRaw, UsersDict } from "./user.interface";

export const fetchUsers: () => Promise<FetchUsersResponse> = async () => {
  return axios
    .get<UserRaw[]>("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data)
    .then((data) => ({
      users: data.reduce(
        (acc: UsersDict, ur: UserRaw) => ({ ...acc, [ur.id]: ur.name }),
        {}
      ),
    }));
};
