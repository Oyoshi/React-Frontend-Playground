import { Moment } from "moment";

export type FormFields = {
  baseCurrency: string;
  quoteCurrency: string;
  dateRange?: [Moment, Moment];
};

export type NullableFormFields = FormFields | null;

export type InputsFormSectionProps = {
  callback: (fields: FormFields) => void;
};
