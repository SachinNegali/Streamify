import MetricCard from "@/components/core/metricCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-items-center min-h-screen p-8 pb-20 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
    </div>
  );
}
