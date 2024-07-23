import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PackageService } from '../package.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormsModule } from '@angular/forms';
import { AddpackageComponent } from '../addpackage/addpackage.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aduppackage',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './aduppackage.component.html',
  styleUrl: './aduppackage.component.css'
})
export class AduppackageComponent implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<AduppackageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private packageService: PackageService,
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.package = this.data.packages;
    this.imgData = this.getPackageImageSrc(this.package.img);
    this.img1Data = this.getPackageImageSrc(this.package.img1);
    this.img2Data = this.getPackageImageSrc(this.package.img2);
    this.img3Data = this.getPackageImageSrc(this.package.img3);
    this.img4Data = this.getPackageImageSrc(this.package.img4);
    this.img5Data = this.getPackageImageSrc(this.package.img5);
    this.img6Data = this.getPackageImageSrc(this.package.img6);
    this.img7Data = this.getPackageImageSrc(this.package.img7);
    this.img8Data = this.getPackageImageSrc(this.package.img8);
  }

  package: any;

  numSequence(n: number): Array<number> { 
    return Array(n); 
  }

  imgData: string | ArrayBuffer | null="";
  img1Data: string | ArrayBuffer | null="";
  img2Data: string | ArrayBuffer | null="";
  img3Data: string | ArrayBuffer | null="";
  img4Data: string | ArrayBuffer | null="";
  img5Data: string | ArrayBuffer | null="";
  img6Data: string | ArrayBuffer | null="";
  img7Data: string | ArrayBuffer | null="";
  img8Data: string | ArrayBuffer | null="";

  generateDayplanInputs(): void {
    if (!this.package) return;
    this.package.dayplans = this.fb.array([]);
    for (let i = 0; i < this.package.days; i++) {
      this.package.dayplans.push(this.fb.control(''));
    }
  }

  getToday(): string {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    return formattedDate;
  }

  getPackageImageSrc(image: any): string {
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
        this.package.img = {
          data: Array.from(imageData),
          contentType: "image/jpeg"
        };
        this.imgData = dataUri;
      };
    }
  }

  onFileSelected1(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const dataUri = reader.result as string;
        const imageData = this.getDataFromDataUri(dataUri);
        this.package.img1 = {
          data: Array.from(imageData), 
          contentType: "image/jpeg" 
        };
        this.img1Data = dataUri;
      };
    }
  }

  onFileSelected2(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const dataUri = reader.result as string;
        const imageData = this.getDataFromDataUri(dataUri);
        this.package.img2 = {
          data: Array.from(imageData), 
          contentType: "image/jpeg" 
        };
        this.img2Data = dataUri;
      };
    }
  }

  onFileSelected3(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const dataUri = reader.result as string;
        const imageData = this.getDataFromDataUri(dataUri);
        this.package.img3 = {
          data: Array.from(imageData), 
          contentType: "image/jpeg"
        };
        this.img3Data = dataUri;
      };
    }
  }

  onFileSelected4(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const dataUri = reader.result as string;
        const imageData = this.getDataFromDataUri(dataUri);
        this.package.img4 = {
          data: Array.from(imageData), 
          contentType: "image/jpeg"
        };
        this.img4Data = dataUri;
      };
    }
  }

  onFileSelected5(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const dataUri = reader.result as string;
        const imageData = this.getDataFromDataUri(dataUri);
        this.package.img5 = {
          data: Array.from(imageData), 
          contentType: "image/jpeg"
        };
        this.img5Data = dataUri;
      };
    }
  }

  onFileSelected6(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const dataUri = reader.result as string;
        const imageData = this.getDataFromDataUri(dataUri);
        this.package.img6 = {
          data: Array.from(imageData), 
          contentType: "image/jpeg"
        };
        this.img6Data = dataUri;
      };
    }
  }

  onFileSelected7(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const dataUri = reader.result as string;
        const imageData = this.getDataFromDataUri(dataUri);
        this.package.img7 = {
          data: Array.from(imageData), 
          contentType: "image/jpeg"
        };
        this.img7Data = dataUri;
      };
    }
  }

  onFileSelected8(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const dataUri = reader.result as string;
        const imageData = this.getDataFromDataUri(dataUri);
        this.package.img8 = {
          data: Array.from(imageData), 
          contentType: "image/jpeg"
        };
        this.img8Data = dataUri;
      };
    }
  }

  saveChanges() {

    console.log("In")
    
    for(var i=0;i<this.package.days;i++)
      {
        this.package.dayplans[i]=this.package.dayplans[i].toString()
      }

    const pdata = {
      name: this.package.name,
      highlights: this.package.highlights,
      desc: this.package.desc,
      from: this.package.from,
      to:this.package.to,
      inc:this.package.inc,
      exc:this.package.exc,
      rating: this.package.rating,
      price: this.package.price,
      days: this.package.days.toString(),
      nights: this.package.nights.toString(),
      limit: this.package.limit.toString(),
      start:this.package.start,
      dayplans:Array.from(this.package.dayplans),
      img: this.package.img,
      img1: this.package.img1,
      img2: this.package.img2,
      img3: this.package.img3,
      img4: this.package.img4,
      img5: this.package.img5,
      img6: this.package.img6,
      img7: this.package.img7,
      img8: this.package.img8
    };
    if(pdata)
      {
      this.packageService.updatePackageDetails(this.package._id,pdata)
      .subscribe(
        (packagedata: any) => {
          console.log('Updated successfully:', packagedata);
          this.package=packagedata;
          alert('Package updated successfully.');
          window.location.href='/adminpackage';
        },
        (error) => {
          alert("Try Again!!")
          console.error('Error updating profile:', error);
        }
      );
    }  
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
