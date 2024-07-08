import TableComponent from "./components/TableComponent";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function Page() {
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
        <TableComponent />
      </CardContent>
    </Card>
  );
}

export default Page;
