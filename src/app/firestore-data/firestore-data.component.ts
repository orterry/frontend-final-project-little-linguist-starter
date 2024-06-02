import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable } from 'rxjs';

@Component({
  standalone:true,
  selector: 'app-firestore-data',
  templateUrl: './firestore-data.component.html',
  styleUrls: ['./firestore-data.component.css']
})
export class FirestoreDataComponent implements OnInit {
  data$: Observable<any[]> | undefined;

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    const data = this.firestoreService.getData();
    console.log(data.subscribe(
      data => {
        console.log('Fetched data:', data); // Log the data to the console
      },
      error => {
        console.error('Error fetching data:', error); // Log any errors
      }
    ))
    };
    // const newUser = {
    //   name: 'John Doe',
    //   email: 'john.doe@example.com'
    // };
    // this.firestoreService.addUser(newUser).then(() => {
    //   console.log('User added successfully!');
    // }).catch(error => {
    //   console.error('Error adding user: ', error);
    // });

    
    
  }

