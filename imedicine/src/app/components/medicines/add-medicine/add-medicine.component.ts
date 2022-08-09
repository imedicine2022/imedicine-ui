import { Component, OnInit } from '@angular/core';
import { Medicine } from "../../../constants/data";
import { MessageService } from "primeng/api";
import { FormControl } from '@angular/forms';


@Component({
  selector: 'im-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.scss'],
  providers:  [MessageService]
})
export class AddMedicineComponent implements OnInit {

  medicines: Medicine[] =  [];

  selectedMedicine: Medicine = {medicineName:''}

  constructor(private messageService: MessageService) { }


  ngOnInit(): void {
    this.medicines = [
      {medicineName: 'Akamol'},
      {medicineName: 'Ibufen'},
    ];
  }

  handleClick($event: any) {
    console.log('this.selectedMedicine:', this.selectedMedicine);
    //TODO: Add medicine
    // this.messageService.add({key: 'bc', severity:'info', summary: 'Info', detail: 'Message Content'});
    window.alert('Medicine added succefully')
  }
}
