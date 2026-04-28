import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWaterBodyDto, UpdateWaterBodyDto } from './dto/water-body.dto';
import { CreateMeasurementDto, UpdateMeasurementDto } from './dto/measurement.dto';

@Injectable()
export class WaterBodiesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.waterBody.findMany({
      include: {
        passport: true,
        measurements: true,
      },
    });
  }

  async findOne(id: number) {
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
      throw new NotFoundException(`Water body with id ${id} not found`);
    }

    return waterBody;
  }

  async create(dto: CreateWaterBodyDto) {
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

  async update(id: number, dto: UpdateWaterBodyDto) {
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

  remove(id: number) {
    return this.prisma.waterBody.delete({ where: { id } });
  }

  async addMeasurement(waterBodyId: number, dto: CreateMeasurementDto) {
    const waterBody = await this.prisma.waterBody.findUnique({
      where: { id: waterBodyId },
    });

    if (!waterBody) {
      throw new NotFoundException(`Water body with id ${waterBodyId} not found`);
    }

    return this.prisma.measurement.create({
      data: {
        ...dto,
        date: dto.date ? new Date(dto.date) : undefined,
        waterBodyId,
      },
    });
  }

  getMeasurements(waterBodyId: number) {
    return this.prisma.measurement.findMany({
      where: { waterBodyId },
      orderBy: { date: 'desc' },
    });
  }

  async updateMeasurement(
    waterBodyId: number,
    measurementId: number,
    dto: UpdateMeasurementDto,
  ) {
    const measurement = await this.prisma.measurement.findFirst({
      where: { id: measurementId, waterBodyId },
    });

    if (!measurement) {
      throw new NotFoundException(
        `Measurement with id ${measurementId} not found for water body ${waterBodyId}`,
      );
    }

    return this.prisma.measurement.update({
      where: { id: measurementId },
      data: {
        ...dto,
        date: dto.date ? new Date(dto.date) : undefined,
      },
    });
  }

  async removeMeasurement(waterBodyId: number, measurementId: number) {
    const measurement = await this.prisma.measurement.findFirst({
      where: { id: measurementId, waterBodyId },
    });

    if (!measurement) {
      throw new NotFoundException(
        `Measurement with id ${measurementId} not found for water body ${waterBodyId}`,
      );
    }

    return this.prisma.measurement.delete({ where: { id: measurementId } });
  }
}
