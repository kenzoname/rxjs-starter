import { Injectable } from "@angular/core";
import { Observable, Observer, of, throwError } from "rxjs";
import * as _ from 'lodash';
import { UserInterface } from "../user.data";
import * as users from '../user.data';
const USER_IDS = [1, 2, 3, 4, 5];

@Injectable({
    providedIn: 'root'
})
export class ObserverService {
    users: UserInterface[] = users['default'];
    getUserID(error: boolean = false): Observable<number> {
        let item = USER_IDS[Math.floor(Math.random() * USER_IDS.length)];
        return !error ?  of(item) : throwError('No ID');
    }

    getUser(id: number): Observable<UserInterface> {
        console.log('GET USER BY ID', id )
        let user = _.find(this.users, {userId: id});
        return user ? of(user) : throwError('Not found user');
    }

}