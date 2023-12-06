import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css'],
})
export class EditarPensamentoComponent implements OnInit {
  pensamento!: FormGroup;
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = this.formBuilder.group({
        id: [pensamento.id],
        conteudo: [
          pensamento.conteudo,
          Validators.compose([
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/), //validação para espacos vazios
          ]),
        ],
        autoria: [
          pensamento.autoria,
          Validators.compose([Validators.required, Validators.minLength(3)]),
        ],
        modelo: [pensamento.modelo],
      });
    });
  }

  editarPensamento() {
    this.service.editar(this.pensamento.value).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }
  habilitarBotao(): string {
    if (this.pensamento.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }
}
