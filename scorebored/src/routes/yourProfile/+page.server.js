import { charts } from "./data";

export function load() {
  return {
    summaries: charts.map((chart) => ({
      slug: chart.slug,
      title: chart.title,
      no: chart.no,
      //   chart_data: chart.chart_data,
    })),
  };
}
