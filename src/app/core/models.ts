export interface BerriesType {
  count: number;
  next: null;
  previous: null;
  results: BerryItem[];
}

export interface BerryItem {
  name: string;
  url: string;
}

export interface BerryFlavor {
  flavor: BerryItem;
  potency: number;
}

export interface BerryInfo {
  firmness: BerryItem;
  flavors: BerryFlavor[];
  growth_time: number;
  id: number;
  item: BerryItem;
  max_harvest: number;
  name: string;
  natural_gift_type: BerryItem;
  size: number;
  smoothness: number;
  soil_dryness: number;
}

export interface BerryFirmnesses {
  id: number;
  name: string;
  berries: BerryItem[];
  names: {name: string; language: BerryItem}[];
}
