export interface Leave{
    [index: number]:{
    leaveType:string,
    leaveStatus: string,
    leaveBalance: number,
    paidLeave: number,
    sickLeave: number,
    leaveDate: [],
    numDays: number,
    employee_id: number
}
length:Number
}