import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  title = 'Angular-Frontend';
  //groups:any={}
  groups = [] as any;

  constructor(private http: HttpClient,  private router: Router) { }
  ngOnInit() {
    this.http.get<any[]>("http://localhost:8000"+'/get')
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

  add() {
    this.router.navigate(['/add']);
  }
  
  edit() {
    this.router.navigate(['/edit']);
   }

}