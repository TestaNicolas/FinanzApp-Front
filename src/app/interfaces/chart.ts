import { ChartTypeRegistry } from "chart.js";

export interface IChart {
  type: keyof ChartTypeRegistry,
  data: any,
  options: any,
}
