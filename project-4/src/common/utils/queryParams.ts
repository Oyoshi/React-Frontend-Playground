import { isEmpty } from "lodash";

export const concatQueryParams = <R>(request: R) => {
  let queryParams = "";
  for (let [key, value] of Object.entries(request)) {
    const sep = isEmpty(queryParams) ? "" : "&";
    if (value) {
      if (key === "_order") {
        queryParams += `${sep}_sort=user&${key}=${value}`;
      } else {
        queryParams += `${sep}${key}=${value}`;
      }
    }
  }
  return queryParams;
};
