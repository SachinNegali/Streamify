import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MetricCardProps } from "@/types/componentTypes";
import Image from "next/image";
import {
  Users,
  ChartColumnIncreasing,
  Activity,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  IndentIncrease,
  Crown,
  MonitorDot,
} from "lucide-react";

const MetricCard = ({ title, metric, icon }: MetricCardProps) => {
  const Icon = () =>
    icon === "users" ? (
      <Users className="h-4 w-4" />
    ) : icon === "activity" ? (
      <MonitorDot className="h-4 w-4" />
    ) : icon === "revenue" ? (
      <DollarSign className="h-4 w-4" />
    ) : icon === "top" ? (
      <Crown className="h-4 w-4" />
    ) : (
      <Activity className="h-4 w-4" />
    );

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {/* <Users className="h-4 w-4" />
        <Activity className="h-4 w-4" />
        <DollarSign className="h-4 w-4" />
        <Crown className="h-4 w-4" /> */}
        <Icon />
        {/* <Image
          className="invert h-4 w-4 text-muted-foreground"
          src="/users.svg"
          // src="/revenue.svg"
          // src="/streams.svg"
          alt="Users"
          width={24}
          height={24}
        /> */}
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{metric}</div>
        {/* <p className="text-xs text-muted-foreground">{subtitle}</p> */}
      </CardContent>
    </Card>
  );
};

export default MetricCard;
