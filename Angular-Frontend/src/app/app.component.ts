import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Angular-Frontend';
  //groups:any={}
  groups = [] as any;

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get<any[]>("http://localhost:8000"+'/')
           .subscribe(data => {
             console.log(data);
             console.log(data[0][0]);

             var len= data.length;
             console.log(len)
             for (var i=0;i<len;i++){
              console.log(data[i][0])
              this.groups[i]={"id":data[i][0],"name":data[i][1],"last":data[i][2],"dept":data[i][3]}
             }
             console.log(this.groups)

            },
           error => {
           }
  );
  
  }
}