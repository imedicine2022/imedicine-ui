import { Component, OnInit } from '@angular/core';
import { Medicine } from "../../../constants/data";

@Component({
  selector: 'im-edit-medicine',
  templateUrl: './edit-medicine.component.html',
  styleUrls: ['./edit-medicine.component.scss']
})
export class EditMedicineComponent implements OnInit {
  medicines: Medicine[] =  [];

  selectedMedicine: Medicine = {medicineName:''}

  constructor() { }

  ngOnInit(): void {
    this.medicines = [
      {medicineName: 'Akamol'},
      {medicineName: 'Ibufen'},
    ];
  }
  handleClick($event: any) {
    console.log('this.selectedMedicine:', this.selectedMedicine);
    //TODO: Add medicine
  }
}
