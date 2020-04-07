import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http: HttpClient) {

  }

  response: string = 'no response received';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Disposition': 'application/json'
    })
  };

  test() {
    console.log('tested');
    const url = environment.apiEndpoint + "api/ping";
    this.http.get<any>(url).subscribe(res => {
      this.response = res;
    });


  }
}
