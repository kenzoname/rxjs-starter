import { Injectable, EventEmitter } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Log } from "./log.interface";

@Injectable({
    providedIn: 'root'
})
export class EventService {
    log:  EventEmitter<any> = new EventEmitter();
    $log = this.log.asObservable();
    info(mess, comment=null) {
        console.info(comment, mess);
        
        this.log.next({type: 'info', message: mess})
        if (comment) this.log.next({type: 'info', message: comment});
    }

    error(mess, comment=null) {
        console.info(comment, mess);
        if (comment) this.log.next({type: 'info', message: comment});
        this.log.next({type: 'error', message: mess})
    }
    warn(mess, comment=null) {
        console.info(comment, mess);
        if (comment) this.log.next({type: 'info', message: comment});
        this.log.next({type: 'warn', message: mess})
    }
    debug(mess, comment=null) {
        console.info(comment, mess);
        if (comment) this.log.next({type: 'info', message: comment});
        this.log.next({type: 'debug', message: mess})
       
    }
    success(mess, comment=null) {
        console.info(comment, mess);
        if (comment) this.log.next({type: 'info', message: comment});
        this.log.next({type: 'sucess', message: mess})
       
    }
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
       ;
    }
}