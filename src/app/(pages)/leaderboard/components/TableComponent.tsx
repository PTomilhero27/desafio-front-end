"use client";
import React from "react";
import Image from "next/image";
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
  nome: string;
  vendas: number;
};

const TableComponent: React.FC = () => {
  const data: Data[] = React.useMemo(
    () => [
      {
        id: "https://avatars.githubusercontent.com/u/70902978?v=4",
        nome: "Pedro Tomilhero",
        vendas: 90,
      },
      {
        id: "https://avatars.githubusercontent.com/u/70902978?v=4",
        nome: "Pedro Tomilhero",
        vendas: 51,
      },
      {
        id: "https://avatars.githubusercontent.com/u/70902978?v=4",
        nome: "Pedro Tomilhero",
        vendas: 27,
      },
      {
        id: "https://avatars.githubusercontent.com/u/70902978?v=4",
        nome: "Pedro Tomilhero",
        vendas: 15,
      },
      {
        id: "https://avatars.githubusercontent.com/u/70902978?v=4",
        nome: "Pedro Tomilhero",
        vendas: 12,
      },
      {
        id: "https://avatars.githubusercontent.com/u/70902978?v=4",
        nome: "Pedro Tomilhero",
        vendas: 10,
      },
      {
        id: "https://avatars.githubusercontent.com/u/70902978?v=4",
        nome: "Pedro Tomilhero",
        vendas: 9,
      },
      {
        id: "https://avatars.githubusercontent.com/u/70902978?v=4",
        nome: "Pedro Tomilhero",
        vendas: 8,
      },
      {
        id: "https://avatars.githubusercontent.com/u/70902978?v=4",
        nome: "Pedro Tomilhero",
        vendas: 7,
      },
      {
        id: "https://avatars.githubusercontent.com/u/70902978?v=4",
        nome: "Pedro Tomilhero",
        vendas: 7,
      },
      {
        id: "https://avatars.githubusercontent.com/u/70902978?v=4",
        nome: "Pedro Tomilhero",
        vendas: 7,
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
            <Image
              src={row.original.id}
              alt="Foto do Vendedor"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
          );
        },
      },
      {
        header: "Nome do Vendedor",
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
        header: "Total de Vendas",
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
    <table className="min-w-full h-full border-collapse border-spacing-0">
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
