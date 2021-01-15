import { Injectable, EventEmitter } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Log } from "./log.interface";

@Injectable({
    providedIn: 'root'
})
export class EventService {
    log:  EventEmitter<any> = new EventEmitter();
    $log = this.log.asObservable();
    sendLogs(log: Log) {
        switch(log.type) {
            case 'info':
                console.info(log.message);break;
            case 'error':
                console.error(log.message);break;
            case 'warn':
                console.warn(log.message);break;
            default:
                console.debug(log.message);break;
        }
        this.log.next(log)
    }
}