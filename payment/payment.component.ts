import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as jspdf from 'jspdf';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit{

  currentUser: string = "";
  contactno: string="";
  rooms: string = "";
  checkIn: string = "";
  checkOut: string = "";
  hname:string="";
  hloc:string="";
  price: string="";
  type:number=0;
  fprice:number=0.0;
  upi:string="";
  cno:string="";
  expdate:string="";
  cvv:string="";
  formData:any;
  constructor(private route: ActivatedRoute, private router: Router,private hotelService: HotelService){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.formData=params
    });
  }

  onKeyPress(event: KeyboardEvent) {
    if (isNaN(Number(event.key)) || (event.target as HTMLInputElement).value.length >= 10) {
        event.preventDefault();
    }
  }

  confirmBooking(){
    if(this.formData.type==1)
    {
      const bookingData = {
        hname: this.formData.hname,
        roomsBooked: parseInt(this.formData.rooms)
        };
        const hotelb={mail:this.formData.email,rb:this.formData.rooms,cin:this.formData.checkIn,cout:this.formData.checkOut,name:this.formData.hname,location:this.formData.hloc,price:this.formData.price}
        this.hotelService.addbookRooms(hotelb).subscribe((hoteldata: any) => {
          console.log('Room booked successfully',hoteldata);
        }, error => {
          console.error('Failed to add book room:', error);
        });
        this.hotelService.bookRoom(bookingData).subscribe(response => {
          alert('Room booked successfully');
          this.generatePDF();
          this.router.navigate(['/dashboard'], { queryParams: { email: this.formData.email } });
        }, error => {
          console.error('Failed to book room:', error);
        });
        
    }
  }

  generatePDF() {
    if(this.formData.type==1)
    {
      this.fprice = parseFloat(this.formData.price.replace('Rs. ', '')) * parseInt(this.formData.rooms);
      const content = `
      ...........................Invoice...................................
        Customer Mail   :  ${this.formData.email}
        Rooms Booked    :  ${this.formData.rooms}
        Check-in Date   :  ${this.formData.checkIn}
        Check-out Date  :  ${this.formData.checkOut}
      .........................Hotel Details...............................
        Name      :  ${this.formData.hname}
        Location  :  ${this.formData.hloc}
        Price     :  Rs. ${this.fprice}
      ......................................................................
        Thank you for your Bookings..Visit Again...
      ......................................................................
    `;

    const pdf = new jspdf.jsPDF();
    pdf.text(content, 10, 10);
    pdf.save('payment-hotel-details.pdf');
    }
  }
  
}
