type Location = {
    lat: number;
    long: number;
};
  

export type workPlaceTDO = {
    base: string;
    building: string;
    office: string;
    networks: "none" | "blms" | "army" | "ts";
    description: string;
    location: Location;
}