import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        login: true,
        email: true,
        avatarUrl: true,
        role: true,
      },
      orderBy: { login: 'asc' },
    });
  }

  findById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  findByLogin(login: string) {
    return this.prisma.user.findUnique({ where: { login } });
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  create(dto: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        login: dto.login,
        email: dto.email,
        password: dto.password,
        avatarUrl: dto.avatarUrl,
        role: (dto.role as any) ?? 'CLIENT',
      },
    });
  }

  async update(id: number, dto: UpdateUserDto) {
    const data = { ...dto } as any;

    if (dto.password) {
      data.password = await bcrypt.hash(dto.password, 10);
    }

    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
