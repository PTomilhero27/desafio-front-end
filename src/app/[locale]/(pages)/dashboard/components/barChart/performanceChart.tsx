import CardComponent from "@/components/card/card";
import CustomBarChart from "./customBarChart";
import { getTranslationsForLocale } from "@/lib/translationUtils";

const PerformanceChart: React.FC = () => {
  const t = getTranslationsForLocale();

  const data = [
    {
      name: t.dashboard.performance.days.Segunda,
      Aguardando: 12000,
      Implantadas: 8000,
    },
    {
      name: t.dashboard.performance.days.Terça,
      Aguardando: 15000,
      Implantadas: 10000,
    },
    {
      name: t.dashboard.performance.days.Quarta,
      Aguardando: 8000,
      Implantadas: 22000,
    },
    {
      name: t.dashboard.performance.days.Quinta,
      Aguardando: 17000,
      Implantadas: 14000,
    },
    {
      name: t.dashboard.performance.days.Sexta,
      Aguardando: 10000,
      Implantadas: 8000,
    },
    {
      name: t.dashboard.performance.days.Sábado,
      Aguardando: 14000,
      Implantadas: 11000,
    },
    {
      name: t.dashboard.performance.days.Domingo,
      Aguardando: 20000,
      Implantadas: 13000,
    },
  ];

  const bars = [
    {
      key: "Aguardando",
      color: "#0095FF",
      name: t.dashboard.performance.status.Aguardando,
    },
    {
      key: "Implantadas",
      color: "#00E096",
      name: t.dashboard.performance.status.Implantadas,
    },
  ];

  return (
    <CardComponent
      title={t.dashboard.performance.title}
      description=""
      export={true}
    >
      <div className="relative flex justify-center items-center w-full h-full">
        <div className="w-full h-full absolute -left-[30px]">
          <CustomBarChart data={data} bars={bars} />
        </div>
      </div>
    </CardComponent>
  );
};

export default PerformanceChart;
