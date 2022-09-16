import { Injectable } from '@angular/core';

export interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  servers: Server[] = [
    {
      id: 1,
      name: 'Server-1',
      status: 'online',
    },
    {
      id: 2,
      name: 'Server-2',
      status: 'offline',
    },
    {
      id: 3,
      name: 'Server-3',
      status: 'online',
    },
  ];

  getServer(id: number): Server {
    return this.servers.find((server) => server.id === id)!;
  }

  updateServer(server: Server) {
    this.servers = this.servers.map((s) => {
      if (s.id === server.id) {
        s = { ...server };
      }
      return s;
    });
  }
}
