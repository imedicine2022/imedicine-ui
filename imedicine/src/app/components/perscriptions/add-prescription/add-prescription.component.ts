import { ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PrescriptionItem } from "../../../constants/data/prescription";
import { MedicalSpecialty } from "../../../constants/data";
import {transition
} from "@angular/animations";

@Component({
  selector: 'im-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.scss'],
})
export class AddPrescriptionComponent implements OnInit, OnChanges {


  constructor(private cdr:ChangeDetectorRef) { }




  prescriptionForm: any;

  validation: boolean = false;
  units = [{unit:'mg'},{unit:'pill'}]

  get  dosage() {
    return this.prescriptionForm.get('dosage');
  }
  get  medicalSpecialty() {return this.prescriptionForm.get('medicalSpecialty')}

  get medicals() {
    return Object.values(MedicalSpecialty).map(val=>{
      if(val!='OTHER') {
        const str = val.toString();
        const uppercased =  str.charAt(0).toUpperCase()  + str.slice(1)
        return {'name':  uppercased}
      }
      else {return {'name':'Other'}}
    });
  }



  ngOnInit(): void {
    this.prescriptionForm = new FormGroup({
      prescriptionDrugId: new FormControl(''),
      dosage: new FormControl(0,[
        Validators.required,
        Validators.min(4)
      ]),
      medicalSpecialty: new FormControl(null,[
      ]),
      accountId: new FormControl(''),
      issueDate: new FormControl(),
      drugName:  new FormControl(''),
      timeLimited: new FormControl(0),
    });

    this.validation = this.dosage.invalid &&  this.medicalSpecialty.invalid;
  }


  onSubmit() {
    const presItem = this.prescriptionForm.getRawValue() as PrescriptionItem;
    console.log('presItem:', presItem);

  }

  ngOnChanges(){
    this.validation = this.dosage.invalid  || this.medicalSpecialty.invalid;
  }
}
