export interface AddManagementRequest{
    firstName: string,
    lastName: string
    gender: number | null,
    departmentId: number | null,
    typeofUser: number | null,
    designation: number | null,
    phone: string,
    email: string,
    registrationDate: Date |null,
    dataEntryBy: string,
    userName: string,
    userPassword: string,
    startDate: string,
    workingPlace: number | null
}