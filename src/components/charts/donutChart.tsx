"use client";

import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PieChartProps } from "@/types/componentTypes";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  subscriptions: {
    label: "Subscriptions",
    color: "hsl(var(--chart-1))",
  },
  advertising: {
    label: "Advertising",
    color: "hsl(var(--chart-2))",
  },
  donations: {
    label: "Donations",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

const DonutChart = ({ data }: PieChartProps) => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Revenue Distribution</CardTitle>
        <CardDescription>
          <div className="flex items-center gap-2 font-medium leading-none">
            Increased by 10% this month <TrendingUp className="h-4 w-4" />
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[360px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data}
              dataKey="revenue"
              nameKey="source"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={0}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 10} />
              )}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex flex-col md:flex-row lg:flex-row gap-2 text-sm justify-between">
        {data.map(({ source, fill }) => (
          <div
            className="flex items-center self-end gap-2 font-medium leading-none"
            key={source}
          >
            <div
              className={`h-3 w-3 rounded-sm`}
              style={{ backgroundColor: fill }}
            />
            {source}
          </div>
        ))}
      </CardFooter>
    </Card>
  );
};

export default DonutChart;
