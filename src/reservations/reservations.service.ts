import { Injectable, BadRequestException } from '@nestjs/common';
import { Reservation } from './reservation.schema';
import { ReservationsRepository } from './reservations.repository';


@Injectable()
export class ReservationsService {
  constructor(private reservationsRepository: ReservationsRepository) {}

  // Use the reservationsRepository in the service methods

  // Add this method in reservations.service.ts
  async createReservation(reservation: Partial<Reservation>): Promise<Reservation> {
    try {
      return await this.reservationsRepository.createReservation(reservation);
    } catch (error) {
      if (error.name === 'ValidationError') {
        throw new BadRequestException(`Validation Error: ${error.message}`);
      }
      throw error;
    }
  }

  // Add this method in reservations.service.ts
    async getReservationsByRestaurantId(restaurantId: string): Promise<Reservation[]> {
    return await this.reservationsRepository.findReservationsByRestaurantId(restaurantId);
  }

  // Add this method in reservations.service.ts
  async updateReservationStatus(reservationId: string, status: string): Promise<Reservation> {
    try {
      return await this.reservationsRepository.updateReservationStatus(reservationId, status);
    } catch (error) {
      if (error.name === 'ValidationError') {
        throw new BadRequestException(`Validation Error: ${error.message}`);
      }
      throw error;
    }
  }

  // Add this method in reservations.service.ts
  async updateCheckInStatus(reservationId: string, checkInStatus: string): Promise<Reservation> {
    try {
      return await this.reservationsRepository.updateCheckInStatus(reservationId, checkInStatus);
    } catch (error) {
      if (error.name === 'ValidationError') {
        throw new BadRequestException(`Validation Error: ${error.message}`);
      }
      throw error;
    }
  }

  
}
