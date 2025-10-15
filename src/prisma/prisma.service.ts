import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
// Import the generated Prisma client. `prisma generate` created the client under /generated/prisma
import { PrismaClient } from '../../generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
}