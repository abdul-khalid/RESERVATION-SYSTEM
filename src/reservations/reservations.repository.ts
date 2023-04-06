import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Reservation } from './reservation.schema';

@Injectable()
export class ReservationsRepository {
  constructor(
    @InjectModel(Reservation.name) private reservationModel: Model<Reservation>,
  ) {}

  // Creating a reservation
  async createReservation(reservation: Partial<Reservation>): Promise<Reservation> {
    const createdReservation = new this.reservationModel(reservation);
    return await createdReservation.save();
  }

    // Finding reservations by restaurant id
    async findReservationsByRestaurantId(restaurantId: string): Promise<Reservation[]> {
    return await this.reservationModel.find({ restaurant_id: restaurantId }).exec();
  }

  // Updating reservation status
  async updateReservationStatus(reservationId: string, status: string): Promise<Reservation> {
    const objectId = Types.ObjectId(reservationId);
    const foundReservation = await this.reservationModel.findById(objectId).exec();
  
    if (foundReservation) {
      console.log('Reservation found:', foundReservation);
    } else {
      console.log('Reservation not found with ID:', reservationId);
    }
  
    return await this.reservationModel.findByIdAndUpdate(objectId, { status, updated_at: new Date() }, { new: true, runValidators: true  }).exec();
  }

//   Updating check-in status
  async updateCheckInStatus(reservationId: string, checkInStatus: string): Promise<Reservation> {
    const objectId = Types.ObjectId(reservationId);
    return await this.reservationModel.findByIdAndUpdate(
      objectId,
      { check_in_status: checkInStatus, updated_at: new Date() },
      { new: true, runValidators: true }
    ).exec();
  }

  // Add any custom methods for interacting with the Reservation collection here
}
