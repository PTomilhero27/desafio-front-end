import CardComponent from "@/components/card/card";
import StackedBarChartComponent from "./stackedBarChartComponent";
import { getTranslationsForLocale } from "@/lib/translationUtils";

const ServiceLevel: React.FC = () => {
  const t = getTranslationsForLocale();

  const data = [
    {
      name: t.dashboard.serviceLevel.months.Jan,
      Expectation: 2800,
      Reality: 3500,
    },
    {
      name: t.dashboard.serviceLevel.months.Feb,
      Expectation: 3300,
      Reality: 3800,
    },
    {
      name: t.dashboard.serviceLevel.months.Mar,
      Expectation: 3800,
      Reality: 1800,
    },
    {
      name: t.dashboard.serviceLevel.months.Apr,
      Expectation: 3500,
      Reality: 2200,
    },
    {
      name: t.dashboard.serviceLevel.months.May,
      Expectation: 2500,
      Reality: 1900,
    },
    {
      name: t.dashboard.serviceLevel.months.Jun,
      Expectation: 2000,
      Reality: 2800,
    },
  ];

  const bars = [
    {
      key: "Reality",
      color: "#00E096",
      name: t.dashboard.serviceLevel.bars.Reality,
      value: 2400,
    },
    {
      key: "Expectation",
      color: "#0095FF",
      name: t.dashboard.serviceLevel.bars.Expectation,
      value: 4000,
    },
  ];

  return (
    <CardComponent title={t.dashboard.serviceLevel.title} description="">
      <div className="relative flex justify-center items-center w-full h-full">
        <div data-testid="chart-container" className="w-full h-full">
          <StackedBarChartComponent data={data} bars={bars} />
        </div>
      </div>
    </CardComponent>
  );
};

export default ServiceLevel;
