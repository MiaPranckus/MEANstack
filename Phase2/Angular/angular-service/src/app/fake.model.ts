/* export interface Fake {
    //all property must be the same keyname
    userID:number;
    id:number;
    title:string;
    completed:boolean;
} */
//verion as an interface instead of class

export class Fake{
    constructor(public userId:number, 
        public id:number, public title:string, public completed:boolean){

        }
}