import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  	constructor() { }

  	logStatusChanges(status : string) {
  		console.log("Service :: A server status changed, new status: "+status);
  	}
}
