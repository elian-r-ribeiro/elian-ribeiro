import { Technologies } from '@core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class TechnologiesProvider {

    constructor(private readonly prisma: PrismaProvider) {}

    async getAll(): Promise<Technologies[]> {
        return this.prisma.technologies.findMany();
    }

    async getTechnologiesWithEmphasis(): Promise<Technologies[]> {
        return this.prisma.technologies.findMany({
            where: {
                emphasis: true
            }
        });
    }
}
