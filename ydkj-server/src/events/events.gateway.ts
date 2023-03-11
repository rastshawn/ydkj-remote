import { Injectable } from '@nestjs/common';
import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, ConnectedSocket } from '@nestjs/websockets'
import { Server, Socket } from 'socket.io';


import * as child from 'child_process';

/**
 * Handles the web sockets, which themselves handle game events. 
 * 
 * This contains all in-game communication between server and client. 
 */
@WebSocketGateway()
export class EventGateway implements OnGatewayConnection, OnGatewayDisconnect{
    @WebSocketServer() server: Server;

    constructor() {}

    async handleConnection() {

      // probably, nothing needs to be done here

      // NOTE important to only emit to sockets in the current game
        console.log("CONNECT");
        // A client has connected
        // Notify connected clients of current users
        //this.server.send("test");
      }
      async handleDisconnect() {
        // A client has disconnected
        // Notify connected clients of current users
        //this.server.emit('users', null);
      }


    

    @SubscribeMessage('events')
    handleEvent(@MessageBody() data: string): string {
      return data;
    }


    // game functions from front end

    /////// MAIN PAGE   
    @SubscribeMessage('pressKey')     
    async pressKey(@MessageBody() data: {
      key: string
    }, @ConnectedSocket() client: Socket): Promise<{
      text: string
    }> {
      if (data.key.match(/[a-z0-9]/)){
        console.log(data.key);
        return new Promise((resolve, reject)  => {
          child.exec(`export DISPLAY=:1 && xdotool key ${data.key}`, (err, stdout, stderr) => {
            if (err) {
              reject(err);
            } else {
              resolve({
                text: stdout
            });
            }
          });
        })
        
      } else {
        return {
          text: "nope"
        };
      }
    }
    
  }