"use client";
import Table from "@/components/table/table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import { createColumns } from "./columns";
import { getTranslationsForLocale } from "@/lib/translationUtils";

type Data = {
  id: string;
  nome: string;
  vendas: number;
};

function Page() {
  const t = getTranslationsForLocale();

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

  const columns = createColumns<Data>(t);

  return (
    <Card className="w-full md:w-auto">
      <CardHeader>
        <div className="flex justify-between">
          {/* {exportProp && (
            <Button
              ref={buttonRef}
              onClick={handleExport}
              variant="outline"
              className="text-black gap-3"
            >
              <HardDriveDownload width={15} height={15} />
              Exportar
            </Button>
          )} */}
        </div>
      </CardHeader>
      <CardContent className="w-full">
        <Table<Data> data={data} columns={columns} />
      </CardContent>
    </Card>
  );
}

export default Page;
