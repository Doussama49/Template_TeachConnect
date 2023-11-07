import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UsersManagementService} from "./users-management.service";
import {CreatePollingStationRequest} from "../model/request/CreatePollingStationRequest";
import {CreateSessionRequest} from "../model/request/up/CreateSessionRequest";
import {ManagePersonRequest} from "../model/request/up/ManagePersonRequest";
import {UpdateGroupRequest} from "../model/request/up/UpdateGroupRequest";
import {AddGradesInSessionRequest} from "../model/request/up/AddGradesInSessionRequest";
import {GetResultsResponse, Results} from "../model/up/Results";
import {GetSessionResponse, Session} from "../model/up/Session";
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private URL = environment.URL + "/v1/api";
  public currentSession: BehaviorSubject<Session> = new BehaviorSubject<Session>(Session.EMPTY);
  public currentResults: BehaviorSubject<GetResultsResponse> = new BehaviorSubject<GetResultsResponse>(GetResultsResponse.EMPTY);

  constructor(private http: HttpClient, private router: Router, private userService: UsersManagementService) { }

  createSession(createSessionRequest: CreateSessionRequest) {
    const path = "/sessions/create";
    return this.http.post<any>(this.URL + path, createSessionRequest, {headers: this.userService.getHeader()});
  }

  getSession(sessionId: string, managePersonRequest: ManagePersonRequest) {
    const path = "/sessions/" + sessionId;
    return this.http.post<GetSessionResponse>(this.URL + path, managePersonRequest,  {headers: this.userService.getHeader()});
  }

  getGroup(groupId: string) {
    const path = "/groups/" + groupId;
    return this.http.get<any>(this.URL + path,  {headers: this.userService.getHeader()});
  }
  checkSessionExist(code: string) {
    const path = "/sessions/check/" + code;
    return this.http.get<boolean>(this.URL + path,  {headers: this.userService.getHeader()});
  }

  addGroup(sessionId: string, managePersonRequest: ManagePersonRequest) {
    const path = "/sessions/" + sessionId + "/group/add";
    return this.http.post(this.URL + path, managePersonRequest,  {headers: this.userService.getHeader()});
  }

  updateGroup(groupId: string, updateGroupRequest: UpdateGroupRequest) {
    const path = "/group/" + groupId + "/update";
    return this.http.patch(this.URL + path, updateGroupRequest,  {headers: this.userService.getHeader()});
  }

  gradeGroup(sessionId: string, addGradesInSessionRequest: AddGradesInSessionRequest) {
    const path = "/sessions/" + sessionId + "/grades/add";
    return this.http.post(this.URL + path, addGradesInSessionRequest,  {headers: this.userService.getHeader()});
  }

  getResults(sessionId: string) {
    const path = "/sessions/" + sessionId + "/results";
    return this.http.get<GetResultsResponse>(this.URL + path,  {headers: this.userService.getHeader()});
  }
}
