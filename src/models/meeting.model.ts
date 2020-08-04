import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Meeting extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  host?: string;

  @property({
    type: 'string',
  })
  contact?: string;

  @property({
    type: 'string',
  })
  week_day?: string;

  @property({
    type: 'string',
  })
  time?: string;

  @property({
    type: 'string',
  })
  link?: string;

  @property({
    type: 'string',
  })
  frequency_in_days?: string;

  @property({
    type: 'string',
  })
  city?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  confirmed?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Meeting>) {
    super(data);
  }
}

export interface MeetingRelations {
  // describe navigational properties here
}

export type MeetingWithRelations = Meeting & MeetingRelations;
