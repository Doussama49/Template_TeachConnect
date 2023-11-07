import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UsersManagementService} from "./users-management.service";
import {PollingStation} from "../model/PollingStation";
import {BehaviorSubject} from "rxjs";
import {CreateUserRequest} from "../model/request/CreateUserRequest";
import {LoginRequest} from "../model/request/LoginRequest";
import {Error} from "../model/Error";
import {CreatePollingStationRequest} from "../model/request/CreatePollingStationRequest";
import {PollingStationFull} from "../model/PollingStationFull";
import {AddSubjectToPollingStationRequest} from "../model/request/AddSubjectToPollingStationRequest";

@Injectable({
  providedIn: 'root'
})
export class PollingStationService {

  private URL = environment.URL + "/v1/api";
  public pollingStation: BehaviorSubject<PollingStation[]> = new BehaviorSubject<PollingStation[]>(PollingStation.EMPTY_LIST);
  public pollingStationToUser: BehaviorSubject<PollingStation[]> = new BehaviorSubject<PollingStation[]>(PollingStation.EMPTY_LIST);

  constructor(private http: HttpClient, private router: Router, private userService: UsersManagementService) {
    this.getAllPollingStation();
    this.getAllPollingStationToUser();
  }


  getAllPollingStationToUser() {
    const path = "/polling-station/";
    this.http.get<any>(this.URL + path, {headers: this.userService.getHeader()}).subscribe(
      (value) => {
        this.pollingStationToUser.next(value.pollingStationDtoList);
        console.log("taked!");
      },
      (error) => {
      },
      () => {
        console.log("completed!")
      }
    );
  }

  getAllPollingStationById(pollingStationId: string) {
    const path = "/polling-station/" + pollingStationId;
    console.log(this.userService.getHeader())
    return this.http.get<any>(this.URL + path, {headers: this.userService.getHeader()});
  }

  getAllPollingStation() {
    const path = "/polling-station/all";
    this.http.get<any>(this.URL + path, {headers: this.userService.getHeader()}).subscribe(
      (value) => {

        console.log(value.pollingStationDtoList)
        this.pollingStation.next(value.pollingStationDtoList);


        console.log("created!");
      },
      (error) => {
      },
      () => {
        console.log("completed!")
      }
    );
  }

  createPollingStation(createPollingStationRequest: CreatePollingStationRequest) {
    const path = "/polling-station/create";
    console.log(this.userService.getHeader())
    this.http.post(this.URL + path, createPollingStationRequest, {headers: this.userService.getHeader()}).subscribe(
      () => {
        console.log("created!")
      },
      (error) => {
        console.log("error!")
      },
      () => {
        console.log("completed!")
      }
    );
  }

  createAndAddSubject(pollingStationId: string, request: AddSubjectToPollingStationRequest) {
    const path = "/polling-station/" + pollingStationId + "/subjects/add";
    this.http.post(this.URL + path, request, {headers: this.userService.getHeader()}).subscribe(
      () => {
        console.log("created!")
      },
      (error) => {
        console.log("error!")
      },
      () => {
        console.log("completed!")
      }
    );
  }


  getDemandNotifications(userId: string) {
    const path = "/polling-station/notify/demand";
    return this.http.get<any>(this.URL + path, {headers: this.userService.getHeader()});
  }

  acceptDemand(demandId: string) {
    const path = "/polling-station/demand/" + demandId + "/accept";
    return this.http.post(this.URL + path, {headers: this.userService.getHeader()});
  }

  rejectDemand(demandId: string) {
    const path = "/polling-station/demand/" + demandId + "/reject";
    return this.http.post(this.URL + path, {headers: this.userService.getHeader()});
  }

  createDemand(pollingStation: string, email: string) {
    const path = "/polling-station/" + pollingStation + "/users/" + email + "/demand";
    console.log(this.userService.getHeader())
    return this.http.post(this.URL + path, null, {headers: this.userService.getHeader()});
  }

  addUserToPollingStation(pollingStationId: string) {
    const path = "/polling-station/" + pollingStationId + "/users/add";
    this.http.post(this.URL + path, null, {headers: this.userService.getHeader()}).subscribe(
      () => {
        console.log("userAdded!")
      },
      (error) => {
        console.log("error!")
      },
      () => {
        console.log("completed!")
      }
    );
  }

}
