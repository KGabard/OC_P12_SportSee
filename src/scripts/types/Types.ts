export type HostDataType = {
  name: string;
  picture: string;
}

export type HousingDataType = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: HostDataType;
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}