import { Component } from '@angular/core';
import { FlightService } from '../flight.service';
import { MatDialog } from '@angular/material/dialog';
import { AddflightComponent } from '../addflight/addflight.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adminflight',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './adminflight.component.html',
  styleUrl: './adminflight.component.css'
})
export class AdminflightComponent {

  constructor(private flightService: FlightService,private dialog: MatDialog) { alert("Manage Flights")}

  flightDetails:any;
  ngOnInit(): void {

    this.flightService.getAllFlightDetails().subscribe(
      (data) => {
        this.flightDetails=data;
      },
      (error) => {
        console.error('Error fetching flight details:', error);
      }
    );
  }

  getHotelImageSrc(image: any): string {
    if (image && image.data && image.contentType) {
      const bufferArray = new Uint8Array(image.data.data);
      const array = Array.from(bufferArray);
      const base64Image = btoa(String.fromCharCode.apply(null, array));
      return `data:${image.contentType};base64,${base64Image}`;
    } else {
      return 'assets/default-hotel-image.png';
    }
  }

  openAddModal() {
    const dialogRef = this.dialog.open(AddflightComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  /*openModal(hotel:any) {
    const dialogRef = this.dialog.open(Puhotelimg1Component, {
      width: '600px',
      data: { hotel } 
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  deleteFlight(hname:any) {
    const confirmation = confirm('Are you sure you want to delete that hotel details?');
    if (confirmation) {
    this.flightService.deleteFlight(hname)
    .subscribe(
      () => {
        alert('Flight deleted successfully.');
        window.location.href='/adminflight';
      },
      (error) => {
        console.error(error);
        alert('Error deleting flight details.');
      }
    );
}
  }*/

}
