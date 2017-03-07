import { Component, OnInit } from '@angular/core';
import {ProductoModel} from './Producto';
import {PRODUCTOS} from './mock-productos';
import { Router } from '@angular/router';
import {ClientesComponent} from '../clientes/clientes.component';
import {CLIENTES} from '../clientes/mock-clientes';
import {ClienteModel} from '../clientes/cliente';
import {PedidoModel} from './Pedido';
@Component({
  moduleId:module.id,
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
listaProductos: ProductoModel[];
listaClientes: ClienteModel[];
listaPedidos: PedidoModel[]=[];
catalogoform=true;
selectedProducto: ProductoModel;
detallePedidoForm: boolean;
productoNumber:number;
PedidoProductoNumber:number;
DetallePedidosForm:boolean;
i:number;
verPedidos():void{
  this.DetallePedidosForm=true;
}
Aceptar():void{
  this.DetallePedidosForm=true;
}
getProductos():ProductoModel[]{
  return(PRODUCTOS);
  
}


  constructor(private router: Router) { }

  ngOnInit() {
    this.listaProductos=this.getProductos();
    this.listaClientes=this.getClientes();

  }
 getClientes():ClienteModel[]{
   return (CLIENTES);
 } 
onSelect(producto: ProductoModel): void {
    this.selectedProducto = producto;
  }
 
Confirmar(id:number){
this.detallePedidoForm=true;
this.PedidoProductoNumber=id;
this.catalogoform=false;
}

goToCarrito(id:string, fecha:String){


var client:ClienteModel = this.getCliente(id);
var produc:ProductoModel=this.listaProductos[this.PedidoProductoNumber];

this.listaPedidos.push(new PedidoModel(client,produc,fecha));
console.log(this.listaPedidos);
this.detallePedidoForm=false;
this.PedidoProductoNumber=0;
this.catalogoform=true;
}


getCliente(id: string): ClienteModel {
    let heroes=this.getClientes();
   return heroes.find(cliente => cliente.apellido=== id);
    
    }
cancelar():void{
this.detallePedidoForm=false;
this.detallePedidoForm=true;
}
}

