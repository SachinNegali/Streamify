"use client";
// import DonutChart from "@/components/charts/donutChart";
// import GrowthChart from "@/components/charts/growthChart";
// import ListChart from "@/components/charts/listChart";
// import StreamStats from "@/components/streamStats/streamStats";
// import StreamsTable from "@/components/tables/streamsTable";
import React, { lazy, Suspense, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  getRevenue,
  getStreams,
  getStreamStats,
  getTopCharts,
  getUsers,
} from "@/store/actions/statActions";
import LoadingIndicator from "@/components/core/loadingIndicator";
import StreamStats from "@/components/streamStats/streamStats";
import DonutChart from "@/components/charts/donutChart";
import ListChart from "@/components/charts/listChart";
import Link from "next/link";
const GrowthChart = lazy(() => import("@/components/charts/growthChart"));
const StreamsTable = lazy(() => import("@/components/tables/streamsTable"));

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { streamStats, users, topCharts, streams, revenue, loading, error } =
    useAppSelector((store) => store.stats);

  useEffect(() => {
    dispatch(getStreamStats());
    dispatch(getUsers());
    dispatch(getTopCharts());
    dispatch(getRevenue());
    dispatch(getStreams());
  }, [dispatch]);
  console.log(loading, error);
  return (
    <div className="flex flex-col justify-items-center min-h-screen p-8 pb-20 gap-6 font-[family-name:var(--font-geist-sans)]">
      <p className="text-2xl font-bold self-start">Streamify</p>

      <StreamStats stats={streamStats} />
      <Suspense fallback={<LoadingIndicator />}>
        <GrowthChart data={users} />
      </Suspense>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 gap-4">
        <DonutChart data={revenue} />

        <ListChart data={topCharts} />
      </div>
      <Suspense fallback={<LoadingIndicator />}>
        <StreamsTable data={streams} />
      </Suspense>

      <a
        className="text-right text-sm underline text-blue-700"
        href="https://streamify-git-main-sachinnegalis-projects.vercel.app/"
        target="_blank"
      >
        Hosted Link (Vercel)
      </a>
    </div>
  );
};

export default Dashboard;
