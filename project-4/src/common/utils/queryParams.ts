import { isEmpty } from "lodash";

export const concatQueryParams = <R>(request: R) => {
  let queryParams = "";
  for (let [key, value] of Object.entries(request)) {
    const sep = isEmpty(queryParams) ? "" : "&";
    if (value) {
      queryParams += `${sep}${key}=${value}`;
    }
  }
  return queryParams;
};
