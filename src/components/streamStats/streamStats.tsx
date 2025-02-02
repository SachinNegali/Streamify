import React from "react";
import MetricCard from "./metricCard";
import { StreamStats as StreamStatsProps } from "@/types/statTypes";

interface Props {
  stats: StreamStatsProps;
}
const StreamStats = ({ stats }: Props) => {
  const { totalUsers, activeUsers, totalStreams, revenue, topArtist } = stats;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-5 sm:grid-cols-2 gap-4">
      <MetricCard title="Total Users" metric={totalUsers} icon="users" />
      <MetricCard title="Active Users" metric={activeUsers} icon="activity" />
      <MetricCard title="Total Streams" metric={totalStreams} icon="streams" />
      <MetricCard title="Revenue" metric={revenue} icon="revenue" />
      <MetricCard title="Top Artist" metric={topArtist} icon="top" />
    </div>
  );
};

export default StreamStats;
