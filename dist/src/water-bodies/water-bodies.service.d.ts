import { PrismaService } from '../prisma/prisma.service';
import { CreateWaterBodyDto, UpdateWaterBodyDto } from './dto/water-body.dto';
import { CreateMeasurementDto, UpdateMeasurementDto } from './dto/measurement.dto';
export declare class WaterBodiesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        passport: {
            id: number;
            surfaceArea: number | null;
            maxDepth: number | null;
            avgDepth: number | null;
            volume: number | null;
            catchmentArea: number | null;
            salinity: number | null;
            altitude: number | null;
            inflow: string | null;
            outflow: string | null;
            updatedAt: Date;
            waterBodyId: number;
        } | null;
        measurements: {
            id: number;
            date: Date;
            waterLevel: number | null;
            temperature: number | null;
            pH: number | null;
            oxygen: number | null;
            transparency: number | null;
            turbidity: number | null;
            notes: string | null;
            waterBodyId: number;
        }[];
    } & {
        id: number;
        name: string;
        latitude: number | null;
        longitude: number | null;
        createdAt: Date;
        type: string;
        region: string;
        description: string | null;
    })[]>;
    findOne(id: number): Promise<{
        passport: {
            id: number;
            surfaceArea: number | null;
            maxDepth: number | null;
            avgDepth: number | null;
            volume: number | null;
            catchmentArea: number | null;
            salinity: number | null;
            altitude: number | null;
            inflow: string | null;
            outflow: string | null;
            updatedAt: Date;
            waterBodyId: number;
        } | null;
        measurements: {
            id: number;
            date: Date;
            waterLevel: number | null;
            temperature: number | null;
            pH: number | null;
            oxygen: number | null;
            transparency: number | null;
            turbidity: number | null;
            notes: string | null;
            waterBodyId: number;
        }[];
    } & {
        id: number;
        name: string;
        latitude: number | null;
        longitude: number | null;
        createdAt: Date;
        type: string;
        region: string;
        description: string | null;
    }>;
    create(dto: CreateWaterBodyDto): Promise<{
        passport: {
            id: number;
            surfaceArea: number | null;
            maxDepth: number | null;
            avgDepth: number | null;
            volume: number | null;
            catchmentArea: number | null;
            salinity: number | null;
            altitude: number | null;
            inflow: string | null;
            outflow: string | null;
            updatedAt: Date;
            waterBodyId: number;
        } | null;
        measurements: {
            id: number;
            date: Date;
            waterLevel: number | null;
            temperature: number | null;
            pH: number | null;
            oxygen: number | null;
            transparency: number | null;
            turbidity: number | null;
            notes: string | null;
            waterBodyId: number;
        }[];
    } & {
        id: number;
        name: string;
        latitude: number | null;
        longitude: number | null;
        createdAt: Date;
        type: string;
        region: string;
        description: string | null;
    }>;
    update(id: number, dto: UpdateWaterBodyDto): Promise<{
        passport: {
            id: number;
            surfaceArea: number | null;
            maxDepth: number | null;
            avgDepth: number | null;
            volume: number | null;
            catchmentArea: number | null;
            salinity: number | null;
            altitude: number | null;
            inflow: string | null;
            outflow: string | null;
            updatedAt: Date;
            waterBodyId: number;
        } | null;
        measurements: {
            id: number;
            date: Date;
            waterLevel: number | null;
            temperature: number | null;
            pH: number | null;
            oxygen: number | null;
            transparency: number | null;
            turbidity: number | null;
            notes: string | null;
            waterBodyId: number;
        }[];
    } & {
        id: number;
        name: string;
        latitude: number | null;
        longitude: number | null;
        createdAt: Date;
        type: string;
        region: string;
        description: string | null;
    }>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__WaterBodyClient<{
        id: number;
        name: string;
        latitude: number | null;
        longitude: number | null;
        createdAt: Date;
        type: string;
        region: string;
        description: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    addMeasurement(waterBodyId: number, dto: CreateMeasurementDto): Promise<{
        id: number;
        date: Date;
        waterLevel: number | null;
        temperature: number | null;
        pH: number | null;
        oxygen: number | null;
        transparency: number | null;
        turbidity: number | null;
        notes: string | null;
        waterBodyId: number;
    }>;
    getMeasurements(waterBodyId: number): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        date: Date;
        waterLevel: number | null;
        temperature: number | null;
        pH: number | null;
        oxygen: number | null;
        transparency: number | null;
        turbidity: number | null;
        notes: string | null;
        waterBodyId: number;
    }[]>;
    updateMeasurement(waterBodyId: number, measurementId: number, dto: UpdateMeasurementDto): Promise<{
        id: number;
        date: Date;
        waterLevel: number | null;
        temperature: number | null;
        pH: number | null;
        oxygen: number | null;
        transparency: number | null;
        turbidity: number | null;
        notes: string | null;
        waterBodyId: number;
    }>;
    removeMeasurement(waterBodyId: number, measurementId: number): Promise<{
        id: number;
        date: Date;
        waterLevel: number | null;
        temperature: number | null;
        pH: number | null;
        oxygen: number | null;
        transparency: number | null;
        turbidity: number | null;
        notes: string | null;
        waterBodyId: number;
    }>;
}
