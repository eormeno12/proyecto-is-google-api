import { Injectable } from '@nestjs/common';

interface TravelRequest {
  id: string;
  userId: string;
  pickup: string;
  dropoff: string;
  price: number;
  details: string;
  status: 'pending' | 'accepted';
  acceptedBy?: string;
}

@Injectable()
export class TravelService {
  private travelRequests: TravelRequest[] = [];

  createTravelRequest(travelRequest: TravelRequest): void {
    this.travelRequests.push(travelRequest);
  }

  getPendingTravelRequests(): TravelRequest[] {
    return this.travelRequests.filter(
      (request) => request.status === 'pending',
    );
  }

  acceptTravel(travelId: string, driverId: string): TravelRequest | null {
    const travelRequest = this.travelRequests.find(
      (request) => request.id === travelId,
    );

    if (travelRequest && travelRequest.status === 'pending') {
      travelRequest.status = 'accepted';
      travelRequest.acceptedBy = driverId;
      return travelRequest;
    }

    return null;
  }
}
