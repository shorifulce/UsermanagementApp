import { Department } from "../../department/models/department.model"
import { Designation } from "../../designation/models/designation.model"
import { Gender } from "../../gender/models/gender.model"

export interface ManagementTbl{
    id:number,
    firstName: string,
    lastName: string
    gender: number | null,
    departmentId: number | null,
    typeofUser: number | null,
    designation: number | null,
    phone: string,
    email: string,
    registrationDate: Date,
    dataEntryBy: string,
    userName: string,
    userPassword: string,
    startDate: string,
    workingPlace: number | null,
    department:Department,
    designationNavigation:Designation,
    genderNavigation:Gender,
    

}