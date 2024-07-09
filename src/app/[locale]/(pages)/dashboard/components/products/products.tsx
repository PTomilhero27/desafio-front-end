import CardComponent from "@/components/card/card";
import Table from "@/components/table/table";
import { createColumns } from "./columns";
import { getTranslationsForLocale } from "@/lib/translationUtils";

type Data = {
  id: string;
  produto: string;
  alavancagem: number;
  porcentagem: number;
  cor: string;
  bgCor: string;
};

const Products: React.FC = () => {
  const t = getTranslationsForLocale();

  const data: Data[] = [
    {
      id: "01",
      produto: "BLUE START ENF SC",
      alavancagem: 75,
      porcentagem: 45,
      cor: "#0095FF",
      bgCor: "#CDE7FF",
    },
    {
      id: "02",
      produto: "BLUE START ENF CO",
      alavancagem: 60,
      porcentagem: 29,
      cor: "#00E096",
      bgCor: "#8CFAC7",
    },
    {
      id: "03",
      produto: "BLUE START APT CO",
      alavancagem: 55,
      porcentagem: 18,
      cor: "#884DFF",
      bgCor: "#C5A8FF",
    },
    {
      id: "04",
      produto: "BLUE START APT SC",
      alavancagem: 25,
      porcentagem: 25,
      cor: "#FF8F0D",
      bgCor: "#FFD5A4",
    },
  ];

  const columns = createColumns<Data>(t);

  return (
    <CardComponent
      title={t.dashboard.products.title}
      description=""
      export={true}
    >
      <Table<Data> data={data} columns={columns} />
    </CardComponent>
  );
};

export default Products;
