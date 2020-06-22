export interface Patient {
    id: string;
    firstName: string;
    lastName: string;
    city: string;
    state: string;
    zipCode: string;
    mobileNumber: string;
    emailId: string;
    age: number;
    sex: string;
    password: string;
    surveryData?: any;
    userType : string;
}
