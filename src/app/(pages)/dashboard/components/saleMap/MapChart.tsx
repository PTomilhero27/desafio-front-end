"use client";
import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import brazilTopoJson from "./brazilTopoJson.json";

const highlightedStates = ["Acre", "Amazonas", , "Ceará", "Bahia"];

const MapChart: React.FC = () => {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ scale: 800, center: [-55, -15] }}
      height={800}
    >
      <Geographies geography={brazilTopoJson}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const isHighlighted = highlightedStates.includes(
              geo.properties.name
            );
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={isHighlighted ? "#0000FF" : "#D6D6DA"}
                stroke="#FFFFFF"
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
