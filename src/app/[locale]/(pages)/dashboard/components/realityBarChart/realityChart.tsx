import CardComponent from "@/components/card/card";
import RealityBarChartComponent from "./realityBarChart";
import { getTranslationsForLocale } from "@/lib/translationUtils";

const RealityChart: React.FC = () => {
  const t = getTranslationsForLocale();

  const data = [
    {
      name: t.dashboard.realityChart.months.Jan,
      Finalized: 8823,
      Pending: 12122,
    },
    {
      name: t.dashboard.realityChart.months.Feb,
      Finalized: 9423,
      Pending: 14122,
    },
    {
      name: t.dashboard.realityChart.months.Mar,
      Finalized: 7923,
      Pending: 10122,
    },
    {
      name: t.dashboard.realityChart.months.Apr,
      Finalized: 8323,
      Pending: 11122,
    },
    {
      name: t.dashboard.realityChart.months.May,
      Finalized: 9623,
      Pending: 15122,
    },
    {
      name: t.dashboard.realityChart.months.Jun,
      Finalized: 10223,
      Pending: 13122,
    },
    {
      name: t.dashboard.realityChart.months.Jul,
      Finalized: 8923,
      Pending: 12122,
    },
  ];

  const bars = [
    {
      key: "Finalized",
      color: "#FFC300",
      name: t.dashboard.realityChart.bars.Finalized,
      value: 8823,
    },
    {
      key: "Pending",
      color: "#28A745",
      name: t.dashboard.realityChart.bars.Pending,
      value: 12122,
    },
  ];

  return (
    <CardComponent
      title={t.dashboard.realityChart.title}
      description=""
      export={true}
    >
      <div className="relative flex justify-center items-center w-full h-full">
        <div className="w-full h-full ">
          <RealityBarChartComponent data={data} bars={bars} />
        </div>
      </div>
    </CardComponent>
  );
};

export default RealityChart;
