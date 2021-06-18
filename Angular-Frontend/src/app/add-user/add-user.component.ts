import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams   } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private http: HttpClient,  private router: Router) { }



  ngOnInit(): void {
  }

  onClickSubmit(data:any) {
    console.log("Entered Email id : " + data.uid);
    console.log("Entered Email id : " + data.firstname);
    console.log("Entered Email id : " + data.lastname);
    console.log("Entered Email id : " + data.dept);
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');

          let params = new HttpParams();
          params = params.append('uid', data.uid);
          params = params.append('firstname', data.firstname);
          params = params.append('lastname', data.lastname);
          params = params.append('dept', data.dept);


   this.http.get('http://localhost:8000/add',  {params: params})
  .subscribe(data1 => {
    console.log(data1);
  });


}
 }

