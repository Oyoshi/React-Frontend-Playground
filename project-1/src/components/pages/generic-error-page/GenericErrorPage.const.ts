type ErrorCode = "403" | "404" | "500";

export interface IError {
  code: ErrorCode;
  title: string;
  description: string;
}

export const FORBIDDEN_PAGE: IError = {
  code: "403",
  title: "Forbidden",
  description: "Access to this resource on the server is denied",
};

export const NOT_FOUND_PAGE: IError = {
  code: "404",
  title: "Not Found",
  description: "Page not found",
};

export const INTERNAL_SERVER_ERROR_PAGE: IError = {
  code: "500",
  title: "Internal Server Error",
  description: "Ooops, something went wrong",
};
