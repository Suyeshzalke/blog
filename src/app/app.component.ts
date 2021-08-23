import { Component } from '@angular/core';
import { UsersDataService } from './users-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Post Method';
  users : any;
  constructor(private userData: UsersDataService){
    this.userData.users().subscribe((data) => {
      this.users = data;
    });
  
  
}
 getUserFormData(data : any) {
  
  this.userData.saveUsers(data).subscribe((result)=>{
    console.warn(result)
  })
  
 }
}