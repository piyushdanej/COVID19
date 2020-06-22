import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Patient } from '../interfaces/patient';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  

  constructor(private firestore: AngularFirestore) { }

  getPatients() {
    return this.firestore.collection('patients').snapshotChanges();
  }

  createPatient(patient: Patient){
    return this.firestore.collection('patients').doc(patient.id).set(patient);
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
  

}
