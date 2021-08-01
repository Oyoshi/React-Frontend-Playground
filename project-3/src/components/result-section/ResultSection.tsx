import React, { useState, useEffect } from "react";
import { Moment } from "moment";
import { useAxios } from "hooks";
import { getLatestURL } from "./ResultSection.const";

type ResultSectionProps = {
  baseCurrency?: string;
  quoteCurrency?: string;
  dateRange?: [Moment, Moment];
};

export const ResultSection: React.FC<ResultSectionProps> = ({
  baseCurrency,
  quoteCurrency,
  dateRange,
}) => {
  const [latestURL, setLatestURL] = useState<string | null>(null);

  useEffect(() => {
    if (baseCurrency && quoteCurrency) {
      setLatestURL(getLatestURL(baseCurrency, quoteCurrency));
    }
  }, [baseCurrency, quoteCurrency]);

  //const { isLoading, data, error } = useAxios(latestURL, 'get', [latestURL]);
  //console.log(isLoading, data, error, latestURL);

  return (
    <section>
      <h1>Dupa</h1>
      <h1>{baseCurrency}</h1>
      <h1>{quoteCurrency}</h1>
    </section>
  );
};
