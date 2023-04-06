import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { Reservation } from './reservation.schema';
import { ReservationsService } from './reservations.service';

@Controller('reservations')
export class ReservationsController {
  constructor(private reservationsService: ReservationsService) {}

//   Route to create a reservation
  @Post()
  async createReservation(
    @Body() reservation: Partial<Reservation>,
  ): Promise<Reservation> {
    return await this.reservationsService.createReservation(reservation);
  }

//   Route to get all reservations for a restaurant
  @Get('restaurant/:restaurantId')
  async getReservationsByRestaurantId(@Param('restaurantId') restaurantId: string): Promise<Reservation[]> {
    return this.reservationsService.getReservationsByRestaurantId(restaurantId);
  }

//   Route to update the status of a reservation
  @Patch(':reservationId/status')
  async updateReservationStatus(
    @Param('reservationId') reservationId: string,
    @Body('status') status: string
  ): Promise<Reservation> {
    console.log('Entering updateReservationStatus route handler with reservationId:', reservationId); // Add this log
    return this.reservationsService.updateReservationStatus(reservationId, status);
  }

//   Route to update the check-in status of a reservation
  @Patch(':id/check-in-status')
  async updateCheckInStatus(
    @Param('id') reservationId: string,
    @Body('check_in_status') checkInStatus: string,
  ): Promise<Reservation> {
    return await this.reservationsService.updateCheckInStatus(reservationId, checkInStatus);
  }

}
