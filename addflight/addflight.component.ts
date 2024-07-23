import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { FlightService } from '../flight.service';
@Component({
  selector: 'app-addflight',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './addflight.component.html',
  styleUrl: './addflight.component.css'
})
export class AddflightComponent {
  constructor(
    public dialogRef: MatDialogRef<AddflightComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private flightService: FlightService
  ) { }

  flight: any = {
    num: '',
    name: '',
    code: '',
    dept: '',
    arr: '',
    price: '',
    seats: 0,
    img: {
      data: [],
      contentType: ''
    }
  }

  imgData: string | ArrayBuffer | null="";

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
  
  getDataFromDataUri(dataUri: string): number[] {
    const base64 = dataUri.split(',')[1];
    const bytes = atob(base64).split('').map(char => char.charCodeAt(0));
    return bytes;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const dataUri = reader.result as string;
        const imageData = this.getDataFromDataUri(dataUri);
        this.flight.img = {
          data: Array.from(imageData),
          contentType: "image/jpeg"
        };
        this.imgData = dataUri;
      };
    }
  }

  saveChanges() {
    const fdata = {
      num:this.flight.num,
      name: this.flight.name,
      code: this.flight.code,
      dept: this.flight.dept,
      arr: this.flight.arr,
      hour:this.flight.hour,
      price: this.flight.price,
      seats:this.flight.seats,
      img: this.flight.img,
    };
    if(this.flight)
      {
      this.flightService.addFlightDetails(fdata)
      .subscribe(
        (flightdata: any) => {
          console.log('Added successfully:', flightdata);
          this.flight=flightdata;
          window.location.href='/adminflight';
        },
        (error) => {
          console.error('Error updating flight details:', error);
        }
      );
    }   
    
  }

  closeDialog() {
    this.dialogRef.close();
  }

}

