import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-addtrain',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addtrain.component.html',
  styleUrl: './addtrain.component.css'
})
export class AddtrainComponent {

  constructor(
    public dialogRef: MatDialogRef<AddtrainComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private packageService: TrainService,
    private fb: FormBuilder
  ) { }

  train: any = {
    tnum:'',
    name: '',
    dept:'',
    arr:'',
    hour:'',
    price:''}

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
        this.packageService.addTrainDetails(tdata)
        .subscribe(
          (traindata: any) => {
            alert('Train added successfully.');
            console.log('Added successfully:', traindata);
            this.train=traindata;
            window.location.href='/admintrain';
          },
          (error) => {
            console.error('Error updating train details:', error);
          }
        );
      }
      this.dialogRef.close();
    }

    closeDialog() {
      this.dialogRef.close();
    }

}
