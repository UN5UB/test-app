const MosaicInfo = ({ company }: { company: Company }) => {
  return (
    <div className="font-bold">
      <p>
        Ticker: <span className="font-normal">{company?.ticker}</span>
      </p>
      <p>
        Name: <span className="font-normal">{company?.name}</span>
      </p>
      <p>
        Legal name: <span className="font-normal">{company?.legal_name}</span>
      </p>
      <p>
        Stock exchange:{" "}
        <span className="font-normal">{company?.stock_exchange}</span>
      </p>
      <p>
        Short description:{" "}
        <span className="font-normal">{company?.short_description}</span>
      </p>
      <p>
        Long description:{" "}
        <span className="font-normal">{company?.long_description}</span>
      </p>
      <p>
        Web: <span className="font-normal">{company?.company_url}</span>
      </p>
      <p>
        Business address:{" "}
        <span className="font-normal">{company?.business_address}</span>
      </p>
      <p>
        Business phone:{" "}
        <span className="font-normal">{company?.business_phone_no}</span>
      </p>
      <p>
        Entity legal form:{" "}
        <span className="font-normal">{company?.entity_legal_form}</span>
      </p>
      <p>
        Latest filing date:{" "}
        <span className="font-normal">{company?.latest_filing_date}</span>
      </p>
      <p>
        Inc country: <span className="font-normal">{company?.inc_country}</span>
      </p>
      <p>
        Employees: <span className="font-normal">{company?.employees}</span>
      </p>
      <p>
        Sector: <span className="font-normal">{company?.sector}</span>
      </p>
      <p>
        Industry category:{" "}
        <span className="font-normal">{company?.industry_category}</span>
      </p>
      <p>
        Industry group:{" "}
        <span className="font-normal">{company?.industry_group}</span>
      </p>
      <p>
        First stock price date:{" "}
        <span className="font-normal">{company?.first_stock_price_date}</span>
      </p>
      <p>
        Last stock price date:{" "}
        <span className="font-normal">{company?.last_stock_price_date}</span>
      </p>
      <p>
        Legacy sector:{" "}
        <span className="font-normal">{company?.legacy_sector}</span>
      </p>
      <p>
        Legacy industry category:{" "}
        <span className="font-normal">{company?.legacy_industry_category}</span>
      </p>
      <p>
        Legacy industry group:{" "}
        <span className="font-normal">{company?.legacy_industry_group}</span>
      </p>
    </div>
  );
};

export default MosaicInfo;
