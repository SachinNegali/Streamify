import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MetricCardProps } from "@/types/componentTypes";
import { Users, Activity, DollarSign, Crown, MonitorDot } from "lucide-react";

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
        <Icon />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{metric}</div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
