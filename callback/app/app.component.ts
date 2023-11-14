import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data!: string;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDataCallback((result: string) => {
      this.data = result;
    });
  }
}
