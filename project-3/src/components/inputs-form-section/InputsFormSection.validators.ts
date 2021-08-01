import { Moment } from "moment";

export const requiredField = (message: string) => ({
  required: true,
  message: message,
});

export const dateRangeValidator = (message: string) => ({
  validator(_: any, dateRage: Moment[]) {
    return dateRage === undefined ||
      (dateRage.length === 2 && dateRage[0] <= dateRage[1])
      ? Promise.resolve()
      : Promise.reject(message);
  },
});
