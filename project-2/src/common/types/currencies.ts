export type AllCurrenciesType = {
  shortName: string;
  FullName: string;
};

export type CurreniesDictEntryType = [string, string];

export type RatesType = {
  [id: string]: { [id: string]: number };
};

export type RatesDictEntryType = [string, { [id: string]: number }];

export type TimeSeriesCurrenciesType = {
  amount: number;
  base: string;
  start_date: string;
  end_date: string;
  rates: RatesType;
};
