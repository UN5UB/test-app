import { useState } from "react";
import { Mosaic, MosaicWindow } from "react-mosaic-component";

import "react-mosaic-component/react-mosaic-component.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import MosaicInfo from "./MosaicInfo";

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
    <Mosaic<string>
      renderTile={(id, path) => {
        return (
          <MosaicWindow<string>
            path={path}
            createNode={() => "new"}
            title={
              <div className="flex items-center">
                <h1 className="font-semibold text-[20px]">Company info</h1>
                <select
                  value={
                    selectedCompanies[id]
                      ? data.indexOf(selectedCompanies[id])
                      : ""
                  }
                  onChange={(e) => handleChangeSelect(e, id)}
                  className="ml-3 border-stone-400 border-solid border-[1px] rounded-[5px] w-40"
                >
                  <option value="" disabled>
                    Select a company
                  </option>
                  {data.map((company, index) => (
                    <option value={index} key={index}>
                      {company.name}
                    </option>
                  ))}
                </select>
              </div>
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
