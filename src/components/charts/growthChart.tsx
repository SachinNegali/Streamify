"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import moment from "moment";
import DropDownSelect from "../core/dropDownSelect";
import { LineChartProps } from "@/types/componentTypes";
import { TrendingUp } from "lucide-react";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  totalUsers: {
    label: "Total Users",
    color: "hsl(var(--chart-1))",
  },
  activeUsers: {
    label: "Active Users",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const GrowthChart = ({ data }: LineChartProps) => {
  const [timeRange, setTimeRange] = React.useState("1y");
  const filteredData = React.useMemo(() => {
    const startTime =
      timeRange === "7d"
        ? moment().subtract(7, "days")
        : timeRange === "30d"
        ? moment().subtract(30, "days")
        : timeRange === "90d"
        ? moment().subtract(90, "days")
        : timeRange === "6m"
        ? moment().subtract(6, "months")
        : moment().subtract(1, "year");
    return data.filter((item) =>
      moment(parseInt(item.date)).isAfter(startTime)
    );
  }, [data, timeRange]);

  const dropDownOptions = [
    { value: "1y", label: "Last 12 months" },
    { value: "6m", label: "Last 6 months" },
    { value: "90d", label: "Last 90 days" },
    { value: "30d", label: "Last 30 days" },
    { value: "7d", label: "Last 7 days" },
  ];

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Platform Users</CardTitle>
          <div className="flex items-center gap-2 font-medium leading-none">
            Increased by 8% this week <TrendingUp className="h-4 w-4" />
          </div>
        </div>
        <DropDownSelect
          value={timeRange}
          onValueChange={setTimeRange}
          options={dropDownOptions}
          defaultOption={"Last 12 months"}
          label="Select a value"
        />
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient
                id="totalUsersGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="var(--color-totalUsers)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-totalUsers)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient
                id="activeUsersGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="var(--color-activeUsers)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-activeUsers)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} className="stroke-muted" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                return moment(parseInt(value)).format("DD MMM YY");
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return moment(parseInt(value)).format("DD MMM YY");
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="totalUsers"
              type="natural"
              fill="url(#totalUsersGradient)"
              stroke="var(--color-totalUsers)"
              strokeWidth={2}
              stackId="total"
            />
            <Area
              dataKey="activeUsers"
              type="natural"
              fill="url(#activeUsersGradient)"
              stroke="var(--color-activeUsers)"
              strokeWidth={2}
              stackId="active"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default GrowthChart;
