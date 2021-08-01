import { Moment } from "moment";

export type FormFields = {
  baseCurrency: string;
  quoteCurrency: string;
  dateRange?: [Moment, Moment];
};

export type NullableFormFields = FormFields | null;

export type CurrenciesDictType = {
  shortName: string;
  FullName: string;
};

export type CurreniesDictEntryType = [string, string];

export type InputsormSectionProps = {
  callback: (fields: FormFields) => void;
};
