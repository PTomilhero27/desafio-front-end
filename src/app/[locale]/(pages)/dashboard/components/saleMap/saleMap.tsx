import CardComponent from "@/components/card/card";
import MapChart from "./MapChart";
import { getTranslationsForLocale } from "@/lib/translationUtils";

const SaleMap: React.FC = () => {
  const t = getTranslationsForLocale();

  return (
    <CardComponent title={t.dashboard.salesMap.mapping.title} description="">
      <div className="flex justify-center items-center w-full h-full">
        <MapChart />
      </div>
    </CardComponent>
  );
};

export default SaleMap;
