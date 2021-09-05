import React, { useState, useEffect } from "react";
import { Spin, Typography } from "antd";
import { FormFields } from "components";
import { TIMESERIES_URL } from "common/fetch-urls";
import { TimeSeriesCurrenciesType } from "common/types";
import { useAxios } from "hooks";
import { TimeSeriesChart } from "./time-series-chart";
import "./ResultSection.less";

const { Title } = Typography;

type ResultSectionProps = FormFields;

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

  const { isLoading, data, error } = useAxios<TimeSeriesCurrenciesType>(
    url,
    "get",
    [url]
  );

  return (
    <section className="result__section">
      {error ? (
        <Title>Something went wrong...</Title>
      ) : (
        <Spin spinning={isLoading}>
          <TimeSeriesChart inputData={data} quoteCurrency={quoteCurrency} />
        </Spin>
      )}
    </section>
  );
};
