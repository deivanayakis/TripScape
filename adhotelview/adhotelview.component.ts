import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-adhotelview',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './adhotelview.component.html',
  styleUrl: './adhotelview.component.css'
})
export class AdhotelviewComponent {

  constructor(
    private hotelService: HotelService
  ) { }

  hotelBDetails:any;
  ngOnInit(): void {
    this.hotelService.getAllHotelBDetails().subscribe(
      (data) => {
        this.hotelBDetails=data;
      },
      (error) => {
        console.error('Error fetching hotel booking details:', error);
      }
    );
  }


}
