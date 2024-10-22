import { MosaicTitleProps } from "../types";

const MosaicTitle = ({
  id,
  data,
  selectedCompanies,
  handleChangeSelect,
}: MosaicTitleProps) => {
  return (
    <div className="flex items-center mt-3">
      <select
        value={selectedCompanies[id] ? data.indexOf(selectedCompanies[id]) : ""}
        onChange={(e) => handleChangeSelect(e, id)}
        className="ml-3 border-black border-solid border-[2px] font-semibold rounded-[5px] w-40"
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
