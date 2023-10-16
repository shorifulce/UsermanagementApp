import { ManagementTbl } from '../../managementTbl/models/managementTbl.model';

export interface System{
    id:number,
    name: string;
    systemDetails: string;
    responsbleManagement:number| null;
    responsbleManagementNavigation:ManagementTbl
}