import moment, { Moment } from "moment";

const HOST = "api.frankfurter.app";

export const ALL_CURRENCIES_URL = `https://${HOST}/currencies`;

export const TIMESERIES_URL = (
  base: string,
  quote: string,
  beginDate?: Moment,
  endDate?: Moment
) => {
  if (beginDate && endDate) {
    const formattedBeginDate = moment(beginDate).format("YYYY-MM-DD");
    const formattedEndDtate = moment(endDate).format("YYYY-MM-DD");
    return `https://${HOST}/${formattedBeginDate}..${formattedEndDtate}?from=${base}&to=${quote}`;
  }

  return `https://${HOST}/1999-01-01..?from=${base}&to=${quote}`;
};
