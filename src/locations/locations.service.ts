import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LocationsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllGeoJson() {
    const locations = await this.prisma.location.findMany();

    return {
      type: 'FeatureCollection',
      features: locations.map((loc) => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [loc.longitude, loc.latitude],
        },
        properties: {
          id: loc.id,
          name: loc.name,
        },
      })),
    };
  }

  async create(name: string, latitude: number, longitude: number) {
    return this.prisma.location.create({ data: { name, latitude, longitude } });
  }

  async remove(id: number) {
    return this.prisma.location.delete({ where: { id } });
  }
}
