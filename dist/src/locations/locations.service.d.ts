import { PrismaService } from '../prisma/prisma.service';
export declare class LocationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllGeoJson(): Promise<{
        type: string;
        features: {
            type: string;
            geometry: {
                type: string;
                coordinates: number[];
            };
            properties: {
                id: number;
                name: string;
            };
        }[];
    }>;
    create(name: string, latitude: number, longitude: number): Promise<{
        id: number;
        name: string;
        latitude: number;
        longitude: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        latitude: number;
        longitude: number;
    }>;
}
