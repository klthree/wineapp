export interface Assessment {
    [key:string]: any;
    assessmentId: number;
    wineId: number;
    acidity: number;
    tannins: number;
    sweetness: number;
    body: number;
    burn: number;
    visualDesc: string;
    olfactoryDesc: string;
    tasteDesc: string;
    finalAssessment: string;
    buyAgain: boolean;
}
