export declare class PassportDto {
    surfaceArea?: number;
    maxDepth?: number;
    avgDepth?: number;
    volume?: number;
    catchmentArea?: number;
    salinity?: number;
    altitude?: number;
    inflow?: string;
    outflow?: string;
}
export declare class CreateWaterBodyDto {
    name: string;
    type: string;
    region: string;
    latitude?: number;
    longitude?: number;
    description?: string;
    passport?: PassportDto;
}
export declare class UpdateWaterBodyDto {
    name?: string;
    type?: string;
    region?: string;
    latitude?: number;
    longitude?: number;
    description?: string;
    passport?: PassportDto;
}
