type Location = {
    lat: number;
    long: number;
};
  

export type workPlaceTDO = {
    base: string;
    building: string;
    office: string;
    networks: "black" | "army" | "ts";
    description: string;
    location: Location;
}