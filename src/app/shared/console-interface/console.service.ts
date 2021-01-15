import { Injectable } from "@angular/core";
import { EventService } from "../event.service";
import { TypeLog } from "../log.interface";

@Injectable({
    providedIn: 'root'
})
export class ConsoleService {
    constructor(private eventService: EventService) {
    }
    log(mess, type: TypeLog ='error') {
        this.eventService.log.next({type: type, message: mess})
    }   
}