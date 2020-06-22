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
    fullName: string;
    familyMemberAge:string;
    relation:string;
    surveyData?: any;
    userType : string;
    category?:string
}
