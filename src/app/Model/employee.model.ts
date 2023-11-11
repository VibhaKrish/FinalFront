export interface Employee {
    eid: number;
    firstname: string;
    lastname: string,
    email: string;
    sex: string,
    organization: string,
    address: string,
    dateofjoining: string,
    department: string,
    role:{
        role: string
    },
    appraisal: number,
    salary: number,
    dob: string,
    hrid: {
        firstname:string,
        lastname: string,
        password: string,
        email: string,
        dob: string
    }
    
}