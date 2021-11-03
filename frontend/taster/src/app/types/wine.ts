import { Winery } from "./winery";

export interface Wine {
    id: number;
    wineName: string;
    wineryId: number;
    alcoholPercentage: number;
    colorId: number;
    year: number;
    isSparkling: string;
}