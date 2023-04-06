import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Reservation, ReservationSchema } from './reservation.schema';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';
import { ReservationsRepository } from './reservations.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Reservation.name, schema: ReservationSchema },
    ]),
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRepository],
})
export class ReservationsModule {}
