"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterBodiesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let WaterBodiesService = class WaterBodiesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.waterBody.findMany({
            include: {
                passport: true,
                measurements: true,
            },
        });
    }
    async findOne(id) {
        const waterBody = await this.prisma.waterBody.findUnique({
            where: { id },
            include: {
                passport: true,
                measurements: {
                    orderBy: { date: 'desc' },
                },
            },
        });
        if (!waterBody) {
            throw new common_1.NotFoundException(`Water body with id ${id} not found`);
        }
        return waterBody;
    }
    async create(dto) {
        const { passport, ...rest } = dto;
        return this.prisma.waterBody.create({
            data: {
                ...rest,
                ...(passport && {
                    passport: { create: passport },
                }),
            },
            include: {
                passport: true,
                measurements: true,
            },
        });
    }
    async update(id, dto) {
        const { passport, ...rest } = dto;
        return this.prisma.waterBody.update({
            where: { id },
            data: {
                ...rest,
                ...(passport && {
                    passport: {
                        upsert: {
                            create: passport,
                            update: passport,
                        },
                    },
                }),
            },
            include: {
                passport: true,
                measurements: true,
            },
        });
    }
    remove(id) {
        return this.prisma.waterBody.delete({ where: { id } });
    }
    async addMeasurement(waterBodyId, dto) {
        const waterBody = await this.prisma.waterBody.findUnique({
            where: { id: waterBodyId },
        });
        if (!waterBody) {
            throw new common_1.NotFoundException(`Water body with id ${waterBodyId} not found`);
        }
        return this.prisma.measurement.create({
            data: {
                ...dto,
                date: dto.date ? new Date(dto.date) : undefined,
                waterBodyId,
            },
        });
    }
    getMeasurements(waterBodyId) {
        return this.prisma.measurement.findMany({
            where: { waterBodyId },
            orderBy: { date: 'desc' },
        });
    }
    async updateMeasurement(waterBodyId, measurementId, dto) {
        const measurement = await this.prisma.measurement.findFirst({
            where: { id: measurementId, waterBodyId },
        });
        if (!measurement) {
            throw new common_1.NotFoundException(`Measurement with id ${measurementId} not found for water body ${waterBodyId}`);
        }
        return this.prisma.measurement.update({
            where: { id: measurementId },
            data: {
                ...dto,
                date: dto.date ? new Date(dto.date) : undefined,
            },
        });
    }
    async removeMeasurement(waterBodyId, measurementId) {
        const measurement = await this.prisma.measurement.findFirst({
            where: { id: measurementId, waterBodyId },
        });
        if (!measurement) {
            throw new common_1.NotFoundException(`Measurement with id ${measurementId} not found for water body ${waterBodyId}`);
        }
        return this.prisma.measurement.delete({ where: { id: measurementId } });
    }
};
exports.WaterBodiesService = WaterBodiesService;
exports.WaterBodiesService = WaterBodiesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], WaterBodiesService);
//# sourceMappingURL=water-bodies.service.js.map