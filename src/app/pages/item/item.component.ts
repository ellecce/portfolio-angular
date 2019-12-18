import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductosService } from "../../services/productos.service";
import { ProductoDescripcioon } from "src/app/interfaces/producto-descripcion.interface";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  producto: ProductoDescripcioon;
  id: string;

  constructor(
    private route: ActivatedRoute,
    public productoService: ProductosService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      // console.log(parametros["productoID"]);
      this.productoService
        .getProducto(parametros["productoID"])
        .subscribe((producto: ProductoDescripcioon) => {
          this.id = parametros["productoID"];
          this.producto = producto;
        });
    });
  }
}
