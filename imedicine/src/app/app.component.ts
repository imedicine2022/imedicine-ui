import { Component } from '@angular/core';
import { MessageService } from "primeng/api";
import { NottiesService } from "./services/notties.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent {

  constructor(private nottiesService: NottiesService) {
  }
  title = 'imedicine';
}
