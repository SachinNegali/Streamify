import { Revenue, Streams, TopChart, Users } from "./statTypes";

export interface MetricCardProps {
  title: string;
  metric: number | string;
  // subtitle: string;
  icon?: string;
}

export interface DropdownProps {
  value: string;
  onValueChange: (val: string) => void;
  options: { value: string; label: string }[];
  defaultOption: string;
  label: string;
}

export interface LineChartProps {
  data: Users[];
}

export interface PieChartProps {
  data: Revenue[];
}

export interface BarChartProps {
  data: TopChart[];
}

export interface TableProps {
  data: Streams[];
}

export interface SortProps {
  key: string;
  direction: "asc" | "desc";
}
