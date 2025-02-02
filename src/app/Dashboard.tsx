"use client";
import DonutChart from "@/components/charts/donutChart";
import GrowthChart from "@/components/charts/growthChart";
import ListChart from "@/components/charts/listChart";
import MetricCard from "@/components/core/metricCard";
import StreamsTable from "@/components/tables/streamsTable";
import {
  getRevenue,
  getStreams,
  getStreamStats,
  getTopCharts,
  getUsers,
} from "@/store/actions/statActions";
import { useAppDispatch } from "@/store/hooks";
import React, { useEffect } from "react";

const Dashboard = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getStreamStats());
    dispatch(getUsers());
    dispatch(getTopCharts());
    dispatch(getRevenue());
    dispatch(getStreams());
  }, []);

  return (
    <div className="flex flex-col justify-items-center min-h-screen p-8 pb-20 gap-6 font-[family-name:var(--font-geist-sans)]">
      <p className="text-2xl font-bold self-start">Streamify</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 gap-4">
        <MetricCard
          title="Total Users"
          metric="1234"
          subtitle="This is what I mean"
        />
        <MetricCard
          title="Total Users"
          metric="1234"
          subtitle="This is what I mean"
        />
        <MetricCard
          title="Total Users"
          metric="1234"
          subtitle="This is what I mean"
        />
        <MetricCard
          title="Total Users"
          metric="1234"
          subtitle="This is what I mean"
        />
      </div>

      <GrowthChart />
      <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 gap-4">
        <DonutChart />
        <ListChart />
      </div>
      <StreamsTable />
    </div>
  );
};

export default Dashboard;
