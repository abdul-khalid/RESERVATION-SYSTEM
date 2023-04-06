import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Reservation extends Document {
  @Prop()
  user_id?: string;

  @Prop({ required: true })
  user_name: string;

  @Prop({ required: true })
  user_mobile: string;

  @Prop({ required: true })
  restaurant_id: string;

  @Prop({ required: true })
  reservation_date: Date;

  @Prop({ required: true })
  reservation_time: string;

  @Prop({ required: true, default: 1 })
  party_size: number;

  @Prop({ required: true, default: 'pending', enum: ['pending', 'accepted', 'declined', 'canceled'] })
  status: string;

  @Prop({ required: true, default: () => Date.now() })
  created_at: Date;

  @Prop({ required: true, default: () => Date.now() })
  updated_at: Date;

  @Prop()
  table_id?: string;

  @Prop({ required: true, default: 'pending', enum: ['pending', 'arrived', 'no_show'] })
  check_in_status: string;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
