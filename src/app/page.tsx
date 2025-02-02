"use client";
import { Provider } from "react-redux";
import Dashboard from "./Dashboard";
import { store } from "@/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}
