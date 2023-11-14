import { error } from "@sveltejs/kit";
import { charts } from "../data.js";

export function load({ params }) {
  const chart = charts.find((chart) => chart.slug === params.slug);

  if (!chart) throw error(404);

  return {
    chart,
  };
}
