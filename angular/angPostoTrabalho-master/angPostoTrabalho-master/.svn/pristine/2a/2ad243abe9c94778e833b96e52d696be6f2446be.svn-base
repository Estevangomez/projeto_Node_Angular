import { Injectable, EventEmitter  } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private socket: SocketIOClient.Socket
  notifier      = new EventEmitter()
  notifier1     = new EventEmitter()
  notifierLogin = new EventEmitter()

  constructor() { 
    this.socket = io( `http://localhost:3000/api/v1/` )

  }

  notify( obj ){
    this.notifier.emit( obj )
  }
  notify1( obj ){
    this.notifier1.emit( obj )
  }

  notifyLogin( obj ){
    this.notifierLogin.emit( obj )
  }
  
  sendNotification( send: string, obj ){
    this.socket.emit(send,obj)
  }

  getNotification(){
    return Observable.create( observer =>{
      this.socket.on('read', msg =>{
        observer.next(msg)
      })
      this.socket.on('new', msg =>{
        observer.next(msg)
      })
      this.socket.on('email', msg =>{
        observer.next(msg)
      })

    })






}
}
