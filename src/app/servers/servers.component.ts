import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "Testserver";
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];

  clicks = [];
  buttonClickedFlag = false;

  constructor() {
  	setTimeout(() => {
  		this.allowNewServer = true;
  	}, 2000)
  }

  ngOnInit() {
  }

  toggle() {
    this.clicks.push(this.clicks.length + 1);
    this.buttonClickedFlag = !this.buttonClickedFlag;
  }

  getBackground(index) {
    return index >= 5 ? 'blue' : 'white';
  }

  atLeastFive(index) {
    return index >= 5 ? true : false;
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
