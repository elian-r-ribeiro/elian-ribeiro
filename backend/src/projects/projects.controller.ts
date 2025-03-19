import { Controller, Get, Param } from '@nestjs/common';
import { ProjectsProvider } from './projects.provider';
import { Projects } from '@core';

@Controller('projects')
export class ProjectsController {

    constructor(private readonly repo: ProjectsProvider) {}

    @Get()
    async getAll(): Promise<Projects[]> {
        return this.repo.getAll();
    }

    @Get(':id')
    async getProjectById(@Param("id") id: string): Promise<Projects> {
        return this.repo.getProjectById(Number(id));
    }
}
