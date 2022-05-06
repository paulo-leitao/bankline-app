import { Component, OnInit } from '@angular/core';
import { CorrentistaService } from 'src/app/services/correntista.service';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';

@Component({
  selector: 'app-movimentacao-new',
  templateUrl: './movimentacao-new.component.html',
  styleUrls: ['./movimentacao-new.component.css']
})
export class MovimentacaoNewComponent implements OnInit {
  
  //Irá receber os dados de correntista da nossa requisição
  correntista: any;
  correntistaSelec: any;

  descricao: any;
  valor: any;
  dataHora: any;
  tipo: any;

  constructor(
    private movimentacaoService: MovimentacaoService,
    private correntistaService: CorrentistaService
  ) { }
  
  // Ao iniciar, irá chamar a requisição http do tipo get através do nosso service criado
  ngOnInit(): void {
    this.exibirCorrentista();
  }

  exibirCorrentista(): void{
    this.correntistaService.list()
      .subscribe(
        data => {
          this.correntista = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
  }

  save(): void {
    console.log(this.correntistaSelec);
    const movimentacao = {
      valor: this.valor,
      descricao: this.descricao,
      tipo: this.tipo,
      dataHora: this.dataHora,
      idConta: this.correntistaSelec.id
    };
    console.log(movimentacao);
    this.movimentacaoService.create(movimentacao)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    
  }

}
