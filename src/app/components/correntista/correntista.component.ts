import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { CorrentistaService } from 'src/app/services/correntista.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-correntista',
  templateUrl: './correntista.component.html',
  styleUrls: ['./correntista.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class CorrentistaComponent implements OnInit {
  correntista: any;
  correntistaSelec: any = {};

  cpf:any;
  nome:any;
  
  public isCollapsed = true;


  constructor(
    config: NgbModalConfig, private modalService: NgbModal,
    private correntistaService: CorrentistaService
  ) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.listCorrentista();
  }

  listCorrentista():void {
    this.correntistaService.list()
      .subscribe(
        data => {
          this.correntista = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }
  save(): void{
    console.log(this.cpf + " " + this.nome);
    const correntista = {
      cpf: this.cpf,
      nome: this.nome
    }
    console.log(correntista);
    if (correntista.cpf && correntista.nome != null) {
    this.correntistaService.create(correntista)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      )
    } else {
      console.log(correntista);
    }
  }
  
  open(content: any) {
    this.modalService.open(content);
  }
}
