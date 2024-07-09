import { ColumnDef } from "@tanstack/react-table";
import { ProgressBar } from "@/components/ui/progressBar/ProgressBar";
import { getTranslationsForLocale } from "@/lib/translationUtils";

type Data = {
  id: string;
  produto: string;
  alavancagem: number;
  porcentagem: number;
  cor: string;
  bgCor: string;
};

export function createColumns<T extends Data>(
  t: ReturnType<typeof getTranslationsForLocale>
): ColumnDef<T>[] {
  return [
    {
      header: t.dashboard.products.columns.id,
      accessorKey: "id",
      cell: ({ row }) => {
        return (
          <span className="text-sm text-[#5D6280] font-medium">
            {row.original.id}
          </span>
        );
      },
    },
    {
      header: t.dashboard.products.columns.product,
      accessorKey: "produto",
      cell: ({ row }) => {
        return (
          <span className="text-sm text-[#5D6280] font-medium">
            {row.original.produto}
          </span>
        );
      },
    },
    {
      header: t.dashboard.products.columns.leverage,
      accessorKey: "alavancagem",
      cell: ({ getValue, row }) => (
        <div>
          <ProgressBar
            color={row.original.cor}
            className={`h-1 bg-[${row.original.bgCor}]`}
            value={getValue<number>()}
          />
        </div>
      ),
    },
    {
      header: t.dashboard.products.columns.percentage,
      accessorKey: "porcentagem",
      cell: ({ row }) => {
        return (
          <div
            className={` text-center rounded-lg bg-[${row.original.bgCor}] border-[${row.original.cor}] border`}
          >
            <span className={`text-sm text-[${row.original.cor}]`}>
              {row.original.porcentagem}%
            </span>
          </div>
        );
      },
    },
  ];
}
