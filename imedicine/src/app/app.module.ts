import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { InputTextModule } from "primeng/inputtext";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { TempPageComponent } from './pages/temp-page/temp-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AddMedicineComponent } from "./components/medicines/add-medicine/add-medicine.component";
import { DropdownModule } from "primeng/dropdown";
import {CardModule} from 'primeng/card';
import { EditMedicineComponent } from './components/medicines/edit-medicine/edit-medicine.component';
import {ToastModule} from 'primeng/toast';
import { AddPrescriptionComponent } from './components/perscriptions/add-prescription/add-prescription.component';
import { PrescriptionDialogBoxComponent } from './components/perscriptions/prescription-dialog-box/prescription-dialog-box.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TempPageComponent,
    HomePageComponent,
    AddMedicineComponent,
    EditMedicineComponent,
    AddPrescriptionComponent,
    PrescriptionDialogBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    CardModule,
    ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
