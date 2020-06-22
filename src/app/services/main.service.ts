import { Patient } from 'src/app/interfaces/patient';
import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import { Clinician } from '../interfaces/clinician';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  selectedPatient : BehaviorSubject<any> = new BehaviorSubject<any>({});
  loggedInPatient : Patient ;
  constructor(private firestore: AngularFirestore) { }

  getPatients() {
    return this.firestore.collection('patients').snapshotChanges();
  }

  getPatient(patient: Patient) {
    return this.firestore.collection('patients').doc(patient.mobileNumber).get();
  }
  
  getAllClinicians(){
    return this.firestore.collection('clinicians').snapshotChanges();
  }

  createPatient(patient: Patient){
    return this.firestore.collection('patients').doc(patient.mobileNumber).set(patient);
  }

  updatePatient(patient: Patient){
    delete patient.id;
    this.firestore.doc('patients/' + patient.id).update(patient);
  }

  updatePatientByMobileNumber(mobileNum : string ,  QAData){
    this.firestore.collection('patients').doc(mobileNum).update(QAData);
    // doc('patients/' + patient.id).update(patient);
  }


  deletePatient(patientId: string){
    this.firestore.doc('patients/' + patientId).delete();
  }

  getAvailableClinicians(){
    // get request here.
    return null;
  }

  createClinician(clinician: Clinician){
    return this.firestore.collection('clinicians').doc(clinician.mobileNumber).set(clinician);
  }

  getSelectedPatient(){
    return this.selectedPatient;
  }

  setSelectedPatient(patient : Patient){
    this.selectedPatient.next(patient);
  }

  setLoggedInPatient(patient:Patient){

    this.loggedInPatient = patient;
    console.log(this.loggedInPatient);  
  }


}
