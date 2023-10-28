import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateCamperRequest } from './dto/create-camper-request.dto';
import { UpdateCamperAllergiesRequest } from './dto/update-camper-allergies-request';

@Controller('campers')
export class CampersController {
	constructor() {}

	@Get(':id')
	async getCamper(@Param('id') camperId: string): Promise<void> {}

	@Get()
	async getCampers(): Promise<void> {}

	@Post()
	async createCamper(
		@Body() createCamperRequest: CreateCamperRequest,
	): Promise<void> {}

	@Patch(':id')
	async updateCamperAllergies(
		@Param('id') camperId: string,
		@Body() updateCamperAllergiesREquest: UpdateCamperAllergiesRequest,
	): Promise<void> {}
}
