import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../hotel.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-hotelpage',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './hotelpage.component.html',
  styleUrl: './hotelpage.component.css'
})
export class HotelpageComponent implements OnInit{

  currentUser: string = "";
  rooms: string = "";
  checkIn: string = "";
  checkOut: string = "";
  hid: any;
  hotel : any;
  formattedPrice: string="";
  

  constructor(private route: ActivatedRoute, private router: Router, private hotelService: HotelService, private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentUser = params['email'];
      this.rooms = params['rooms'];
      this.checkIn=params['checkIn'];
      this.checkOut=params['checkOut'];
      this.hid=params['hid'];
    });
    if (this.hid) {
      this.hotelService.getHotelDetails(this.hid)
          .subscribe(
            (data: any) => {
              this.hotel = data;
              if (this.hotel && this.hotel.price)
              {
                for (const char of this.hotel.price) {
                  if (char !== 'p') {
                    this.formattedPrice += char;
                  } else {
                    break; 
                  }
                }
              }
            },
            (error) => {
              console.error(error);
            }
          );
    }

    

  }  
  

  navigateToMyProfile() {
    this.router.navigate(['/myprofile'], { queryParams: { email: this.currentUser } });
  }

  navigateToPayment(){
    const hp={ email: this.currentUser,checkIn:this.checkIn,checkOut:this.checkOut,rooms:this.rooms,hname:this.hotel.name,hloc:this.hotel.location,price:this.formattedPrice,type:1 };
    console.log("HI  "+hp.email);
    this.router.navigate(['/payment'], { queryParams: hp });
  }

  navigateToMyHotelFill(){
    this.router.navigate(['/hotelfill'], { queryParams: { email: this.currentUser } });
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

  getBase64Image(imgData: any): SafeResourceUrl {
    if (imgData && imgData.contentType && imgData.data) {
      const base64String = `data:image/${imgData.contentType};base64,${imgData.data}`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(base64String);
    }
    return 'assets/default-image.png'; 
  }

}
