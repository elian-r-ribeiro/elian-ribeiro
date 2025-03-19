import { Projects } from '@core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProjectsProvider {

    constructor(private readonly prisma: PrismaProvider) {}

    async getAll(): Promise<Projects[]> {
        return this.prisma.projects.findMany() as any;
    }

    async getProjectById(id: number): Promise<Projects> {
        return this.prisma.projects.findMany({
            where: {
                id: id
            },
            include:{Technologies:true}
        }) as any;
    }
}
