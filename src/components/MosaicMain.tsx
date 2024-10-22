import { useState } from "react";
import { Mosaic, MosaicWindow } from "react-mosaic-component";

import "react-mosaic-component/react-mosaic-component.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import MosaicInfo from "./MosaicInfo";
import MosaicTitle from "./MosaicTitle";
import { DataProps } from "../types";

export type ViewId = "a" | "b" | "c" | "new";

const MosaicMain = ({ data }: DataProps) => {
  const [selectedCompanies, setSelectedCompanies] = useState<{
    [key: string]: any;
  }>({
    a: null,
    b: null,
    c: null,
    new: null,
  });

  const handleChangeSelect = (
    event: React.ChangeEvent<HTMLSelectElement>,
    id: string
  ) => {
    const selectedIndex = Number(event.target.value);
    setSelectedCompanies((prev) => ({
      ...prev,
      [id]: data[selectedIndex],
    }));
  };

  return (
    <Mosaic<ViewId>
      renderTile={(id, path) => {
        return (
          <MosaicWindow<ViewId>
            path={path}
            createNode={() => "new"}
            title={
              <MosaicTitle
                id={id}
                data={data}
                selectedCompanies={selectedCompanies}
                handleChangeSelect={handleChangeSelect}
              />
            }
          >
            <div className="w-[100%] h-[100%] overflow-auto px-4 py-2">
              {selectedCompanies[id] ? (
                <MosaicInfo company={selectedCompanies[id]} />
              ) : (
                <p>Please select a company to view details.</p>
              )}
            </div>
          </MosaicWindow>
        );
      }}
      initialValue={{
        direction: "row",
        first: "a",
        second: {
          direction: "column",
          first: "b",
          second: "c",
        },
      }}
    />
  );
};

export default MosaicMain;
