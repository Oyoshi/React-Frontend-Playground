import { useEffect, useState } from "react";
import * as d3 from "d3";
import { getWindowDimensions, convertDictIntoArray } from "utils";
import {
  TimeSeriesChartProps,
  ParsedRate,
  ParsedRates,
} from "./TimeSeriesChart.types";
import { RatesType, RatesDictEntryType } from "common/types";
import { margin, chartColor, chartHoverColor } from "./TimeSeriesChart.const";
import "./TimeseriesChart.less";

export const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({
  inputData,
  quoteCurrency,
}) => {
  const { width: windowWidth, height: windowHeight } = getWindowDimensions();
  const chartWidth = windowWidth - margin.left - margin.right;
  const chartHeight = windowHeight / 1.5 - margin.top - margin.bottom;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [data, setData] = useState<ParsedRates>([]);

  const parseDate = d3.timeParse("%Y-%m-%d");

  useEffect(() => {
    if (inputData) {
      const rates = convertDictIntoArray<RatesType>(inputData.rates);
      const parsedRates = rates.map((rate: RatesDictEntryType) => ({
        date: parseDate(rate[0]),
        value: Number(rate[1][quoteCurrency ? quoteCurrency : "USD"]),
      }));
      setData(parsedRates);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputData, quoteCurrency]);

  const handleMouseMove = (e: any) => {
    const bisect = d3.bisector((d: ParsedRate) => d.date).left,
      x0 = getX.invert(d3.pointer(e, this)[0]),
      index = bisect(data, x0, 1) as any;
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const getYMinMaxValues = () => ({
    yMinValue: d3.min(data, (d: ParsedRate) => d.value),
    yMaxValue: d3.max(data, (d: ParsedRate) => d.value),
  });

  const { yMinValue, yMaxValue } = getYMinMaxValues();

  if (!(yMinValue && yMaxValue)) {
    return <div className="chart__wrapper" />;
  }

  const getX = d3
    .scaleTime()
    .domain(d3.extent(data, (d: ParsedRate) => d.date) as any)
    .range([0, chartWidth]);

  const getXAxis = (ref: any) => {
    const xAxis = d3.axisBottom(getX);
    d3.select(ref).call(xAxis.tickFormat(d3.timeFormat("%d-%Y") as any));
  };

  const getY = d3
    .scaleLinear()
    .domain([yMinValue - 1, yMaxValue + 2])
    .range([chartHeight, 0]);

  const getYAxis = (ref: any) => {
    const yAxis = d3.axisLeft(getY).tickSize(-chartWidth).tickPadding(6);
    d3.select(ref).call(yAxis);
  };

  const linePath = d3
    .line()
    .x((d: any) => getX(d.date))
    .y((d: any) => getY(d.value))
    .curve(d3.curveMonotoneX)(data as any) as string;

  const areaPath = d3
    .area()
    .x((d: any) => getX(d.date))
    .y0((d: any) => getY(d.value))
    .y1(() => getY(yMinValue - 1))
    .curve(d3.curveMonotoneX)(data as any) as string;

  return (
    <div className="chart__wrapper">
      <svg
        preserveAspectRatio="xMaxYMax meet"
        viewBox={`0 0 ${chartWidth + margin.left + margin.right}
                              ${chartHeight + margin.top + margin.bottom}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <g className="axis" ref={getYAxis} />
        <g
          className="axis xAxis"
          ref={getXAxis}
          transform={`translate(0, ${chartHeight})`}
        />
        <path fill={chartColor} d={areaPath} opacity={0.3} />
        <path strokeWidth={3} fill="none" stroke={chartColor} d={linePath} />
        {data.map((d: ParsedRate, index: number) => {
          return d.date ? (
            <g key={index}>
              <text x={getX(d.date)} y={getY(d.value) - 20} textAnchor="middle">
                {index === activeIndex ? d.value : ""}
              </text>
              <circle
                cx={getX(d.date)}
                cy={getY(d.value)}
                r={index === activeIndex ? 6 : 4}
                fill={chartColor}
                strokeWidth={index === activeIndex ? 2 : 0}
                stroke={chartHoverColor}
                style={{ transition: "ease-out .1s" }}
              />
            </g>
          ) : (
            <g key={index} />
          );
        })}
      </svg>
    </div>
  );
};
