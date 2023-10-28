import { AggregateRoot } from '@nestjs/cqrs';
import { IdentifiableEntitySchema } from './identifiable-entity.schema';
import { ObjectId } from 'mongodb';
import { FilterQuery } from 'mongoose';
import { EntityRepository } from './entity.repository';

export abstract class BaseEntityRepository<
	TSchema extends IdentifiableEntitySchema,
	TEntity extends AggregateRoot,
> extends EntityRepository<TSchema, TEntity> {
	async findOneById(id: string): Promise<TEntity> {
		return this.findOne(
			{ _id: new ObjectId(id) } as FilterQuery<TSchema>,
			entity,
		);
	}

	async findAll(): Promise<TEntity[]> {
		return this.findAll({});
	}
}
