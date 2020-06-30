import { Component, OnInit, Input } from '@angular/core';

import { ToastService } from 'src/app/core/services/toast.service';
import { Produto } from '../shared/produto';
import { ProdutoDataService } from '../shared/produto-data.service';
import { ProdutoService } from '../shared/produto.service';



 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  produto: Produto
  key: string = '';
 
  constructor(private produtoService: ProdutoService, 
    private produtoDataService: ProdutoDataService,    
    private toast: ToastService) { }
 
  ngOnInit() {
    this.produto = new Produto();
    this.produtoDataService.currentProduto.subscribe(data => {
      if (data.produto && data.key) {
        this.produto = new Produto();
        this.produto.nome = data.produto.nome;
        this.produto.preco = data.produto.preco;
        this.key = data.key;
      }
    })
  } 
 
  onSubmit() {
    if (this.key) {
      this.produtoService.update(this.produto, this.key);
    } else {
      this.produtoService.insert(this.produto,);
      try {
        this.toast.showSuccess('Produto cadastrado com sucesso');
      } catch (error) {
        this.toast.showError('Erro ao cadastrar');
      }      
    } 
    this.produto = new Produto();
  }
}