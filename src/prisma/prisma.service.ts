// src/prisma/prisma.service.ts
import { Injectable } from '@nestjs/common';
// src/prisma/prisma.service.ts
import { PrismaClient } from '../../generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        super();
    }
}
