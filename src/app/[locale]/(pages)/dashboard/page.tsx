"use client";
import React from "react";
import PlatformChart from "./components/PlatformChart/platformChart";
import Sales from "./components/sales/sales";
import PerformanceChart from "./components/barChart/performanceChart";
import LifeChart from "./components/lineChart/lifeChart";
import RealityChart from "./components/realityBarChart/realityChart";
import Products from "./components/products/products";
import SaleMap from "./components/saleMap/saleMap";
import ServiceLevel from "./components/serviceLevel/serviceLevel";
import useSearchStore from "@/store/searchStore";

const Page = () => {
  const searchQuery = useSearchStore((state) => state.searchQuery);

  const components = [
    {
      component: <Sales />,
      title: "Vendas hoje",
      className: "col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-2",
    },
    {
      component: <PlatformChart />,
      title: "Plataformas",
      className: "col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2",
    },
    {
      component: <PerformanceChart />,
      title: "Rendimento total",
      className: "col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2",
    },
    {
      component: <LifeChart />,
      title: "Vidas",
      className: "col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1",
    },
    {
      component: <RealityChart />,
      title: "Realidade",
      className: "col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1",
    },
    {
      component: <Products />,
      title: "Top produtos",
      className: "col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2",
    },
    {
      component: <SaleMap />,
      title: "Mapeamento de vendas por UF",
      className: "col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1",
    },
    {
      component: <ServiceLevel />,
      title: "Nível de serviço",
      className: "col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1",
    },
  ];

  const filteredComponents = components.filter(({ title }) =>
    title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredComponents.map(({ component, className }, index) => (
        <div key={index} className={className}>
          {component}
        </div>
      ))}
    </div>
  );
};

export default Page;
