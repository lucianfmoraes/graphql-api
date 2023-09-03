import { Resolver,Query, Mutation, Args } from "@nestjs/graphql";
import { Pedido } from "./pedido.entity";
import { PedidoService } from "./pedido.service";
import { CreatePedidoInput } from "./dto/create-pedido.input";
// import {  } from "@nestjs/common";

@Resolver(of => Pedido)
export class PedidoResolver{

    constructor(private pedidoService: PedidoService){}

    @Query(returns => [Pedido])
    pedidos(): Promise<Pedido[]>{
        return this.pedidoService.findAll();
    }


    @Mutation(returns => Pedido)
    createPedido(@Args('createPedidoInput')createPedidoInput: CreatePedidoInput): Promise<Pedido>{
        return this.pedidoService.createPedido(createPedidoInput);
    }

}