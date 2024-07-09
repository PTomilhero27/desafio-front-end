import CardComponent from "@/components/card/card";
import Chart from "./chart";
import { getTranslationsForLocale } from "@/lib/translationUtils";

const PlatformChart = () => {
  const t = getTranslationsForLocale();

  const data = [
    {
      name: t.dashboard.platforms.months.Jan,
      TD: 340,
      RIKO: 280,
      Blue: 290,
    },
    {
      name: t.dashboard.platforms.months.Fev,
      TD: 300,
      RIKO: 230,
      Blue: 350,
    },
    {
      name: t.dashboard.platforms.months.Mar,
      TD: 260,
      RIKO: 150,
      Blue: 360,
    },
    {
      name: t.dashboard.platforms.months.Abr,
      TD: 210,
      RIKO: 120,
      Blue: 280,
    },
    {
      name: t.dashboard.platforms.months.Mai,
      TD: 220,
      RIKO: 160,
      Blue: 210,
    },
    {
      name: t.dashboard.platforms.months.Jun,
      TD: 240,
      RIKO: 350,
      Blue: 210,
    },
    {
      name: t.dashboard.platforms.months.Jul,
      TD: 310,
      RIKO: 340,
      Blue: 250,
    },
    {
      name: t.dashboard.platforms.months.Set,
      TD: 300,
      RIKO: 300,
      Blue: 230,
    },
    {
      name: t.dashboard.platforms.months.Ago,
      TD: 280,
      RIKO: 290,
      Blue: 290,
    },
    {
      name: t.dashboard.platforms.months.Nov,
      TD: 180,
      RIKO: 230,
      Blue: 230,
    },
    {
      name: t.dashboard.platforms.months.Dez,
      TD: 150,
      RIKO: 150,
      Blue: 200,
    },
  ];

  const lines = [
    { name: t.dashboard.platforms.TD, key: "TD", color: "#800080" },
    { name: t.dashboard.platforms.RIKO, key: "RIKO", color: "#FF0000" },
    { name: t.dashboard.platforms.Blue, key: "Blue", color: "#00FF00" },
  ];

  return (
    <CardComponent
      title={t.dashboard.platforms.title}
      description=""
      export={true}
    >
      <div className="relative flex justify-center items-center w-full h-full">
        <div className="w-full h-full absolute -left-[35px]">
          <Chart data={data} lines={lines} />
        </div>
      </div>
    </CardComponent>
  );
};

export default PlatformChart;
