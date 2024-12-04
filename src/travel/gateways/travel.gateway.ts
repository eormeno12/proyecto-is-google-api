import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { TravelService } from '../services/travel.service';
import { CreateTravelRequestDto } from '../dtos/create-travel-request.dto';
import { AcceptTravelDto } from '../dtos/accept-travel.dto';

@WebSocketGateway({ cors: { origin: '*' } })
export class TravelGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly travelService: TravelService) {}

  @SubscribeMessage('travelRequest')
  handleTravelRequest(@MessageBody() data: CreateTravelRequestDto) {
    this.travelService.createTravelRequest({
      ...data,
      status: 'pending',
    });

    // Notificar a todos los conductores sobre la nueva lista
    this.server.emit(
      'travelList',
      this.travelService.getPendingTravelRequests(),
    );
  }

  @SubscribeMessage('acceptTravel')
  handleAcceptTravel(
    @MessageBody() data: AcceptTravelDto,
    @ConnectedSocket() client: Socket,
  ) {
    const travelRequest = this.travelService.acceptTravel(
      data.travelId,
      data.driverId,
    );

    if (travelRequest) {
      // Notificar al usuario que su viaje fue aceptado
      client.emit('travelAccepted', {
        travelId: travelRequest.id,
        message: `Your travel request has been accepted by driver ${data.driverId}`,
      });

      // Actualizar la lista para los conductores
      this.server.emit(
        'travelList',
        this.travelService.getPendingTravelRequests(),
      );
    } else {
      client.emit('error', {
        message: 'Travel request not found or already accepted.',
      });
    }
  }
}
