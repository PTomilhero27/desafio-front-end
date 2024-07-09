import LineChartComponent from "./LineChartComponent";
import CardComponent from "@/components/card/card";
import { getTranslationsForLocale } from "@/lib/translationUtils";

const LifeChart: React.FC = () => {
  const t = getTranslationsForLocale();

  const data = [
    {
      name: t.dashboard.lifeChart.months.Jan,
      lastMonth: 2432,
      thisMonth: 3700,
    },
    {
      name: t.dashboard.lifeChart.months.Feb,
      lastMonth: 2800,
      thisMonth: 3300,
    },
    {
      name: t.dashboard.lifeChart.months.Mar,
      lastMonth: 2000,
      thisMonth: 3500,
    },
    {
      name: t.dashboard.lifeChart.months.Apr,
      lastMonth: 2100,
      thisMonth: 3000,
    },
    {
      name: t.dashboard.lifeChart.months.May,
      lastMonth: 2300,
      thisMonth: 3600,
    },
    {
      name: t.dashboard.lifeChart.months.Jun,
      lastMonth: 3600,
      thisMonth: 4000,
    },
  ];

  const lines = [
    {
      key: "lastMonth",
      color: "#007DD6",
      name: t.dashboard.lifeChart.lines.lastMonth,
      value: 3432,
    },
    {
      key: "thisMonth",
      color: "#0AC587",
      name: t.dashboard.lifeChart.lines.thisMonth,
      value: 4504,
    },
  ];

  return (
    <CardComponent
      title={t.dashboard.lifeChart.title}
      description=""
      export={true}
    >
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-full h-full">
          <LineChartComponent data={data} lines={lines} />
        </div>
      </div>
    </CardComponent>
  );
};

export default LifeChart;
