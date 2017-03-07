import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteModel } from './Cliente';
import {CLIENTES} from './mock-clientes';

@Component({
    
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
listaclientes:ClienteModel[];
selectedCliente:ClienteModel;
DetalleClienteForm:boolean;
i:number;
numeroBorrar:number;
  constructor(private router: Router) { }
public getListaClientes():ClienteModel[]{
return this.listaclientes;

}

getClientes(): ClienteModel[] {
   return (CLIENTES);
}

  ngOnInit() {
   this.listaclientes= this.getClientes();
  }
onSelect(cliente: ClienteModel): void {
    this.selectedCliente = cliente;
  }
 
gotoDetail(id:number){
this.DetalleClienteForm=true;
this.i=id;
}
onClick(){
  this.DetalleClienteForm=false;
}

borrar(id:number):void{
console.log(id);
this.listaclientes.splice(id,1);  
}

}
