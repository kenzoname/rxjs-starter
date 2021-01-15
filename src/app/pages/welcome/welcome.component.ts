import { Component, OnInit } from '@angular/core';
declare var Chance: any;
import { ConsoleService } from 'src/app/shared/console-interface/console.service';
import user from "../../shared/user.data";
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  users = user;
  constructor(private consoleService: ConsoleService) { }

  ngOnInit() {
    console.log(user);
  }

  randConsole() {
    this.consoleService.log(new Date())
  }

}
