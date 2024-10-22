import { ReactNode } from "react";

declare interface Company {
  long_description: ReactNode;
  id: string;
  ticker: string;
  name: string;
  lei: string;
  legal_name: string;
  stock_exchange: string;
  sic: number;
  short_description: string;
  ceo: string;
  company_url: string;
  business_address: string;
  mailing_address: string;
  business_phone_no: string;
  hq_address1: string;
  hq_address2: string | any;
  hq_address_city: string;
  hq_address_postal_code: string;
  entity_legal_form: string;
  cik: string;
  latest_filing_date: string;
  hq_state: string;
  hq_country: string;
  inc_state: string;
  inc_country: string;
  employees: number;
  entity_status: string;
  sector: string;
  industry_category: string;
  industry_group: string;
  template: string;
  standardized_active: boolean;
  first_fundamental_date: string;
  last_fundamental_date: string;
  first_stock_price_date: string;
  last_stock_price_date: string;
  thea_enabled: boolean;
  legacy_sector: string;
  legacy_industry_category: string;
  legacy_industry_group: string;
}

declare interface MosaicTitleProps {
  id: string;
  data: CompanyProps[];
  selectedCompanies: { [key: string]: any };
  handleChangeSelect: (
    event: React.ChangeEvent<HTMLSelectElement>,
    id: string
  ) => void;
}

declare interface DataProps {
  data: CompanyProps[];
}

declare interface ChangeProps {
  target: any;
  event: React.ChangeEvent<HTMLSelectElement>;
  id: string;
}
