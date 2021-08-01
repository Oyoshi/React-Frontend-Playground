import React, { useState, useEffect } from "react";
import { Moment } from "moment";
import { Spin, Typography } from "antd";
import { TIMESERIES_URL } from "common";
import { useAxios } from "hooks";

const { Title } = Typography;

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
  const [url, setUrl] = useState<string>(TIMESERIES_URL("EUR", "USD"));

  useEffect(() => {
    if (baseCurrency && quoteCurrency) {
      const beginDate = dateRange && dateRange[0];
      const endDate = dateRange && dateRange[1];
      setUrl(TIMESERIES_URL(baseCurrency, quoteCurrency, beginDate, endDate));
    }
  }, [baseCurrency, quoteCurrency, dateRange]);

  // TODO - use data in d3js chart
  const { isLoading, data, error } = useAxios(url, "get", [url]);

  return (
    <section>
      {error ? (
        <Title>Error</Title>
      ) : (
        <Spin spinning={isLoading}>
          <h1>{baseCurrency}</h1>
          <h1>{quoteCurrency}</h1>
        </Spin>
      )}
    </section>
  );
};
