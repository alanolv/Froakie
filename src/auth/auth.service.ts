import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async register(dto: CreateUserDto) {
      const hashedPassword = await bcrypt.hash(dto.password, 10);
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
            passwordHash: hashedPassword,
        },
        select: {
          id: true,
          email: true,
          createdAt: true,
          role: true,
        },
      });
        return {
          message: 'User created successfully',
          user,
        };
    } catch (e) {
        if ((e as any)?.code === 'P2002') {
          throw new ConflictException('Email already in use');
        }
          throw e;
    }
  }
}
