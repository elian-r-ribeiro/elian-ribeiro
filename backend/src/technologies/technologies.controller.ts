import { Controller, Get } from '@nestjs/common';
import { Technologies } from '@core';
import { TechnologiesProvider } from './technologies.provider';

@Controller('technologies')
export class TechnologiesController {

    constructor(private readonly repo: TechnologiesProvider) {}

    @Get()
    async getAll(): Promise<Technologies[]> {
        return this.repo.getAll();
    }

    @Get('emphasis')
    async getTechnologiesWithEmphasis(): Promise<Technologies[]> {
        return this.repo.getTechnologiesWithEmphasis();
    }
}
