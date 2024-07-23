import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TrainService } from '../train.service';
import { FormBuilder, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aduptrain',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './aduptrain.component.html',
  styleUrl: './aduptrain.component.css'
})
export class AduptrainComponent {

  constructor(
    public dialogRef: MatDialogRef<AduptrainComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private trainService: TrainService,
    private fb: FormBuilder
  ) { }

  train: any;

  ngOnInit(): void {
    this.train = this.data.trains;
  }


  saveChanges() {

    const tdata = {
      tnum:this.train.tnum,
      name:this.train.name,
      seats:this.train.seats,
      dept:this.train.dept,
      arr:this.train.arr,
      hour:this.train.hour,
      price:this.train.price
    }
    if(tdata)
      {
      this.trainService.updateTrainDetails(this.train._id,tdata)
      .subscribe(
        (traindata: any) => {
          console.log('Updated successfully:', traindata);
          this.train=traindata;
          alert('Train updated successfully.');
          window.location.href='/admintrain';
        },
        (error) => {
          alert("Try Again!!")
          console.error('Error updating train details:', error);
        }
      );
    }  
  }

  closeDialog() {
    this.dialogRef.close();
  }


}
