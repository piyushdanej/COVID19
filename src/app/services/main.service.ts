import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Patient } from '../interfaces/patient';
import { Clinician } from '../interfaces/clinician';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private firestore: AngularFirestore) { }

  getPatients() {
    return this.firestore.collection('patients').snapshotChanges();
  }

  getPatient(patient: Patient) {
    return this.firestore.collection('patients').doc(patient.mobileNumber).get();
  }

  createPatient(patient: Patient){
    return this.firestore.collection('patients').doc(patient.mobileNumber).set(patient);
  }

  updatePatient(patient: Patient){
    delete patient.id;
    this.firestore.doc('patients/' + patient.id).update(patient);
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

}
