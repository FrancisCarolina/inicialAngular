import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'Conteudo aqui',
      autoria: 'Fran',
      modelo: 'modelo2',
    },
    {
      conteudo: 'Conteudo aqui1',
      autoria: 'Fran',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Conteudo aqui2',
      autoria: 'Fran',
      modelo: 'modelo1',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
