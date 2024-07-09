import { ColumnDef } from "@tanstack/react-table";
import { ProgressBar } from "@/components/ui/progressBar/ProgressBar";
import { getTranslationsForLocale } from "@/lib/translationUtils";
import Image from "next/image";

type Data = {
  id: string;
  nome: string;
  vendas: number;
};
export function createColumns<T extends Data>(
  t: ReturnType<typeof getTranslationsForLocale>
): ColumnDef<T>[] {
  return [
    {
      header: t.dashboard.salesTable.id,
      accessorKey: "id",
      cell: ({ row }) => {
        return (
          <Image
            src={row.original.id}
            alt={t.dashboard.salesTable.sellerName}
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />
        );
      },
    },
    {
      header: t.dashboard.salesTable.sellerName,
      accessorKey: "nome",
      cell: ({ row }) => {
        return (
          <span className="text-sm text-[#5D6280] font-medium">
            {row.original.nome}
          </span>
        );
      },
    },
    {
      header: t.dashboard.salesTable.totalSales,
      accessorKey: "vendas",
      cell: ({ getValue, row }) => (
        <div>
          <ProgressBar
            color="#0000FF"
            className="h-1 bg-[#CDE7FF]"
            value={getValue<number>()}
          />
        </div>
      ),
    },
    {
      header: "",
      accessorKey: "vendas",
      cell: ({ row }) => {
        return (
          <div className="text-center rounded-lg bg-[#CDE7FF] border-[#0000FF] border">
            <span className="text-sm text-[#0000FF]">
              {row.original.vendas}
            </span>
          </div>
        );
      },
    },
  ];
}
