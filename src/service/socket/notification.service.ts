import {Injectable, OnInit} from '@angular/core';
import {WebsocketService} from "./websocket.service";
import {UserDetails} from "../../model/User";
import {UsersManagementService} from "../users-management.service";
import {PollingStation} from "../../model/PollingStation";
import {Subject} from "../../model/Subject";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public pollingStationNotification: BehaviorSubject<any> = new BehaviorSubject<any>(null);


  constructor(private webSocketService: WebsocketService, private userService: UsersManagementService) {
  }


  async init() {
    return this.webSocketService.initWebSocket();
  }

  subscribeNotificationToStationSubjects(pollingStationId: string, func: (event: any) => void) {
    this.webSocketService.subscribe("socket/station/subjects/"+pollingStationId, (event) => {
      func({...event, subject: event.body})
      //this.pollingStationNotification.next(<Subject>event.body);
    })
  }
  unsubscripeNotificationToStationSubjects(pollingStationId: string){
    this.webSocketService.unsubscribeToWebSocketEvent("socket/station/subjects/"+pollingStationId);
  }

  subscribeNotificationToDemandJoinStation(userId: string, func: (event: any) => void) {
    this.webSocketService.subscribe("socket/notify/"+userId, (event) => {
      func({...event, demand: event.body})
    })
  }

  subscribeNotificationToStationUsers(pollingStationId: string, func: (event: any) => void) {
    this.webSocketService.subscribe("socket/station/users/"+pollingStationId, (event) => {
      func({...event, user: event.body})
    })
  }
  unsubscribeNotificationToStationUsers(pollingStationId: string) {
    this.webSocketService.unsubscribeToWebSocketEvent("socket/station/users/"+pollingStationId);
  }
}
