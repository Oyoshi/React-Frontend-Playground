const HOST = "api.frankfurter.app";

export const getLatestURL = (from: string, to: string) =>
  `https://${HOST}/latest?from=${from}&to=${to}`;
