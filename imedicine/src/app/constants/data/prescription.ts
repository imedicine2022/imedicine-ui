import { MedicalSpecialty } from "./enum-types";

//TODO: Change dosage to different type
export interface PrescriptionItem {
  prescriptionDrugId: string;
  accountId: string;
  medicalSpecialty: MedicalSpecialty;
  issueDate: Date;
  drugName: string;
  dosage: number;
  timeLimited: number;
  medicationInstructionsLink?: string;
}
