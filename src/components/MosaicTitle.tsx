import { MosaicTitleProps } from "../types";

const MosaicTitle = ({
  id,
  data,
  selectedCompanies,
  handleChangeSelect,
}: MosaicTitleProps) => {
  return (
    <div className="flex items-center">
      <h1 className="font-semibold text-[20px]">Company info</h1>
      <select
        value={selectedCompanies[id] ? data.indexOf(selectedCompanies[id]) : ""}
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
  );
};

export default MosaicTitle;
