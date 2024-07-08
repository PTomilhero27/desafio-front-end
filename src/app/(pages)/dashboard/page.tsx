import React from "react";
import PlatformChart from "./components/PlatformChart/platformChart";
import Sales from "./components/sales/sales";
import PerformanceChart from "./components/barChart/performanceChart";
import LifeChart from "./components/lineChart/lifeChart";
import RealityChart from "./components/realityBarChart/realityChart";
import Products from "./components/products/products";
import SaleMap from "./components/saleMap/saleMap";
import ServiceLevel from "./components/serviceLevel/serviceLevel";

function Page() {
  return (
    <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-2">
        <Sales />
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2">
        <PlatformChart />
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2">
        <PerformanceChart />
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1">
        <LifeChart />
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1">
        <RealityChart />
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2">
        <Products />
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1">
        <SaleMap />
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1">
        <ServiceLevel />
      </div>
    </div>
  );
}

export default Page;
