import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UpdateLocationDto } from '../dtos/location.dto';

@WebSocketGateway({ cors: { origin: '*' } })
export class LocationGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  // Recibe actualizaciones de ubicación y las transmite a los clientes
  @SubscribeMessage('updateLocation')
  handleLocationUpdate(@MessageBody() data: UpdateLocationDto) {
    console.log('data', data);
    const { vehicleId, lat, lng } = data;

    // Emite la ubicación actualizada a los clientes suscritos a `location-vehicleId`
    this.server.emit(`location-${vehicleId}`, { lat, lng });
  }
}
