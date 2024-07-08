"use client";
import React from "react";
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { ProgressBar } from "@/components/ui/progressBar/ProgressBar";
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";

type Data = {
  id: string;
  produto: string;
  alavancagem: number;
  porcentagem: number;
  cor: string;
  bgCor: string;
};

const TableComponent: React.FC = () => {
  const data: Data[] = React.useMemo(
    () => [
      {
        id: "01",
        produto: "BLUE START ENF SC",
        alavancagem: 75,
        porcentagem: 45,
        cor: "0095FF",
        bgCor: "CDE7FF",
      },
      {
        id: "02",
        produto: "BLUE START ENF CO",
        alavancagem: 60,
        porcentagem: 29,
        cor: "00E096",
        bgCor: "8CFAC7",
      },
      {
        id: "03",
        produto: "BLUE START APT CO",
        alavancagem: 55,
        porcentagem: 18,
        cor: "884DFF",
        bgCor: "C5A8FF",
      },
      {
        id: "04",
        produto: "BLUE START APT SC",
        alavancagem: 25,
        porcentagem: 25,
        cor: "FF8F0D",
        bgCor: "FFD5A4",
      },
    ],
    []
  );

  const columns = React.useMemo<ColumnDef<Data>[]>(
    () => [
      {
        header: "#",
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
        header: "Produto",
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
        header: "Alavancagem",
        accessorKey: "alavancagem",
        cell: ({ getValue, row }) => (
          <div>
            <ProgressBar
              color={`#${row.original.cor}`}
              className={`h-1 bg-[#${row.original.bgCor}]`}
              value={getValue<number>()}
            />
          </div>
        ),
      },
      {
        header: "%",
        accessorKey: "alavancagem",
        cell: ({ row }) => {
          return (
            <div
              className={` text-center rounded-lg bg-[#${row.original.bgCor}] border-[#${row.original.cor}] border`}
            >
              <span className={`text-sm text-[#${row.original.cor}]`}>
                {row.original.porcentagem}%
              </span>
            </div>
          );
        },
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableSortingRemoval: false,
  });

  return (
    <table className="min-w-full border-collapse border-spacing-0">
      <thead className="">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="border-b">
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                onClick={header.column.getToggleSortingHandler()}
                className="p-2 text-left text-sm font-normal text-secondary cursor-pointer"
              >
                <div className="flex items-center">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {header.column.getIsSorted() ? (
                    header.column.getIsSorted() === "asc" ? (
                      <ArrowUp className="ml-2 w-4 h-4" />
                    ) : (
                      <ArrowDown className="ml-2 w-4 h-4" />
                    )
                  ) : (
                    <ChevronsUpDown className="ml-2 w-4 h-4" />
                  )}
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="border-b">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="p-2">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
