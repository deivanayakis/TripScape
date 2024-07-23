import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HotelService } from '../hotel.service';
import { MatDialog } from '@angular/material/dialog';
import { Puhotelimg1Component } from '../puhotelimg1/puhotelimg1.component';
import { AddhotelComponent } from '../addhotel/addhotel.component';

@Component({
  selector: 'app-adminhotel',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './adminhotel.component.html',
  styleUrl: './adminhotel.component.css'
})
export class AdminhotelComponent implements OnInit{


  constructor(private hotelService: HotelService,private dialog: MatDialog) { alert("Manage Hotels")}
  hotelDetails: any; 
  hotelBDetails:any;
  ngOnInit(): void {

    this.hotelService.getAllHotelDetails().subscribe(
      (data) => {
        this.hotelDetails=data;
      },
      (error) => {
        console.error('Error fetching hotel details:', error);
      }
    );
  }


  viewModal()
  {
    window.location.href='/adhotelview';
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

      openModal(hotel:any) {
        const dialogRef = this.dialog.open(Puhotelimg1Component, {
          width: '600px',
          data: { hotel } 
        });
    
        dialogRef.afterClosed().subscribe(result => {
        });
      }

      deleteHotel(hname:any) {
        const confirmation = confirm('Are you sure you want to delete that hotel details?');
        if (confirmation) {
        this.hotelService.deleteHotel(hname)
        .subscribe(
          () => {
            alert('Hotel deleted successfully.');
            window.location.href='/adminhotel';
          },
          (error) => {
            console.error(error);
            alert('Error deleting hotel details.');
          }
        );
    }
      }

      openAddModal() {
        const dialogRef = this.dialog.open(AddhotelComponent, {
          width: '600px'
        });
    
        dialogRef.afterClosed().subscribe(result => {
          
        });
      }
    

}
