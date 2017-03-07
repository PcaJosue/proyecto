import{ClienteModel} from '../clientes/cliente';
import {ProductoModel} from './Producto';

export class PedidoModel {
  cliente: ClienteModel;
  producto:Array<ProductoModel>;
  fecha:String;
  constructor(cliente:ClienteModel,producto:ProductoModel,fecha:String){

    this.cliente=cliente;
    this.producto=[producto];
    this.fecha=fecha;
  }
}