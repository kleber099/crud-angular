import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css'],
})
export class ProductDeleteComponent implements OnInit {
  product: Product = {
    name: '',
    price: null,
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.productService
      .getProduct(id)
      .subscribe((product) => (this.product = product));
  }

  deleteProduct(): void {
    const id = String(this.product.id!);
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage('Produto excluído com sucesso');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
