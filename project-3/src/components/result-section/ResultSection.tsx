import React from "react";
import { Moment } from "moment";

type ResultSectionProps = {
  baseCurrency?: string;
  quoteCurrency?: string;
  dateRange?: Moment[];
};

export const ResultSection: React.FC<ResultSectionProps> = ({
  baseCurrency,
  quoteCurrency,
  dateRange,
}) => {
  return (
    <section>
      <h1>Dupa</h1>
      <h1>{baseCurrency}</h1>
      <h1>{quoteCurrency}</h1>
    </section>
  );
};
