import { LocationsService } from './locations.service';
export declare class LocationsController {
    private readonly locationsService;
    constructor(locationsService: LocationsService);
    findAll(): Promise<{
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
    create(body: {
        name: string;
        latitude: number;
        longitude: number;
    }): Promise<{
        id: number;
        name: string;
        latitude: number;
        longitude: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        latitude: number;
        longitude: number;
    }>;
}
