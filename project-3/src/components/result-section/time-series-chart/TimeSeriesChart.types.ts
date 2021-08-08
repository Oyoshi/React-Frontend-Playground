import { TimeSeriesCurrenciesType } from "common/types";

export type TimeSeriesChartProps = {
  inputData: TimeSeriesCurrenciesType | null;
  quoteCurrency: string;
};

export type ParsedRate = {
  date: Date | null;
  value: number;
};

export type ParsedRates = ParsedRate[];
