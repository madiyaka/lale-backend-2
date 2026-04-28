import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LocationsService } from './locations.service';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get()
  findAll() {
    return this.locationsService.findAllGeoJson();
  }

  @Post()
  create(@Body() body: { name: string; latitude: number; longitude: number }) {
    return this.locationsService.create(body.name, body.latitude, body.longitude);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locationsService.remove(Number(id));
  }
}
