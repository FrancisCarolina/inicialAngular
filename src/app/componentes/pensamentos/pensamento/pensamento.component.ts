import { Component, OnInit, Input } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento: Pensamento = {
    id: 1,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false,
  };

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {}

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  mudarIconeFavorito(): string {
    if (this.pensamento.favorito) {
      return 'ativo';
    } else {
      return 'inativo';
    }
  }

  atualizarFavoritos() {
    this.service.mudarFavorito(this.pensamento).subscribe();
  }
}
