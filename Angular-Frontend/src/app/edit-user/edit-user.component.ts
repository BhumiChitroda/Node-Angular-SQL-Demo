import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams   } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  newmodel:any;
  powers:any = [];
  firstName:any;
  lastName:any;
  deptName:any;

  sqldata:any=[];
  list:any=[];
  constructor(private changeDetector: ChangeDetectorRef , private http: HttpClient,  private router: Router) { }


  ngOnInit(): void {
    this.http.get<any[]>("http://localhost:8000"+'/get')
           .subscribe(data => {
             console.log(data);
             console.log(data[0][0]);

             var len= data.length;
             console.log(len)
             for (var i=0;i<len;i++){
              console.log(data[i][0])
              this.sqldata[i]={"id":data[i][0],"name":data[i][1],"last":data[i][2],"dept":data[i][3]}
              this.powers[i]=data[i][0];
             }
             console.log(this.sqldata)

            },
           error => {
           }
  );  }

  public phraseType (event : any) {
      var phraseType=(event.target.value)
      this.newmodel=phraseType;
      var i=0
      var len=this.powers.length
      while( i< len) {
        if (this.powers[i]==this.newmodel){
          this.firstName=this.sqldata[i].name;
          this.lastName=this.sqldata[i].last;
          this.deptName=this.sqldata[i].dept;
          this.changeDetector.detectChanges();
          break;
        }
        i=i+1;
      }
      
  }
  onClickSubmit(data:any) {
    console.log("Entered Email id : " + data.firstname);
    console.log("Entered Email id : " + data.lastname);
    console.log("Entered Email id : " + data.dept);
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');

          let params = new HttpParams();
          params = params.append('uid', this.newmodel);
          params = params.append('firstname', data.firstname);
          params = params.append('lastname', data.lastname);
          params = params.append('dept', data.dept);


   this.http.get('http://localhost:8000/edit',  {params: params})
  .subscribe(data1 => {
    console.log(data1);
  });


}
 }

