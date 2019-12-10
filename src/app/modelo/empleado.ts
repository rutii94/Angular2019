import { runInThisContext } from 'vm';

export class Empleado {
    constructor(public id:number, 
        public nombre:string,
        public apellido:string,
        public departamento){

        }
        nombreCompleto(){
            return this.apellido +", " + this.nombre;
        }
}
