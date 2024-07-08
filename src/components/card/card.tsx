"use client";
import { useRef } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { HardDriveDownload } from "lucide-react";
import html2canvas from "html2canvas";
import { useToast } from "../ui/toast/use-toast";

interface CardComponentProps {
  title: string;
  description: string;
  export?: boolean;
  children?: React.ReactNode;
}

const CardComponent: React.FC<CardComponentProps> = (props) => {
  const { description, title, children, export: exportProp = false } = props;
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { toast } = useToast();

  const handleExport = async () => {
    if (cardRef.current && buttonRef.current) {
      buttonRef.current.style.display = "none";

      const canvas = await html2canvas(cardRef.current);
      const imgData = canvas.toDataURL("image/png");

      buttonRef.current.style.display = "";

      const link = document.createElement("a");
      link.href = imgData;
      link.download = `${title}.png`;
      link.click();

      toast({
        variant: "success",
        title: "",
        description: "Imagem exportada com sucesso!",
      });
    }
  };

  return (
    <Card ref={cardRef} className="w-full md:w-auto">
      <CardHeader>
        <div className="flex justify-between">
          <div className="w-full">
            <CardTitle className="text-base text-title dark:text-white">
              {title}
            </CardTitle>
            <CardDescription className="text-xs text-secondary">
              {description}
            </CardDescription>
          </div>

          {exportProp && (
            <Button
              ref={buttonRef}
              onClick={handleExport}
              variant="outline"
              className="text-black gap-3"
            >
              <HardDriveDownload width={15} height={15} />
              Exportar
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="w-full overflow-x-auto h-[260px]">
        {children}
      </CardContent>
    </Card>
  );
};

export default CardComponent;
