export interface Companydata {
  name: string;
  founder: string;
  founded: number;
  employees: number;
  vehicles: number;
  launch_sites: number;
  test_sites: number;
  ceo: string;
  cto: string;
  coo: string;
  cto_propulsion: string;
  valuation: number;
  headquarters: Headquarters;
  summary: string;
}

export interface Headquarters {
  address: string;
  city: string;
  state: string;
}


export interface History {
  title: string;
  event_date_utc: Date;
  flight_number: number;
  details: string;
  links: Links;
}

export interface Links {
  reddit: string;
  article: string;
  wikipedia: string;
}

