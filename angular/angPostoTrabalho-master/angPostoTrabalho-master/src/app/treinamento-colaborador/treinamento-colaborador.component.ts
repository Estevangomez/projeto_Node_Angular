import { ApiService } from './../providers/posto-trabalho.service';
import { filter } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../interfaces/usuario';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'



@Component({
  selector: 'app-treinamento-colaborador',
  templateUrl: './treinamento-colaborador.component.html',
  styleUrls: ['./treinamento-colaborador.component.css']

})
export class TreinamentoColaboradorComponent implements OnInit {

  title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions: NgbModalOptions;

  linha: any[];
  private atividade: any = [];
  private postos: any = [];
  private linh: any;
  private usuario: Usuario = new Usuario();
  private colaboradorForm: FormGroup;
  colaborador: FormControl = new FormControl();
  private ativ: any
  private atv: any;
  private tipo: any;
  PtConfig: any;
  idPosto: number;
  colaboradores = [];
  private codfun: any;
  codPT: any;
  showModal: boolean;
  private colaboradoresAssociados: any;
  private existeColaborador: boolean = false;
  produto: any;
  prod: any;
  qtd: any;
  atvd: any;
  nomecolab: any;
  selectedColab: any;
  colabList = [];
  listaColab = [];
  postosList: any;
  postoFormArray = [];
  disableButton: boolean = false;
  colaboradorAssociado: any;
  colabAssociados = [];
  colab:any;
  existepostos:boolean = false;
	naoExistePostos:boolean = true;
  private idColaboradorRemover:number;


  constructor(private apiService: ApiService, private route: ActivatedRoute, private modalService: NgbModal, private fb: FormBuilder) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
      
    }

  }

  ngOnInit() {
    //jquery('.bt-add-lider').fadeOut()

    this.linha = JSON.parse(sessionStorage.getItem('linha'));
    this.ativ = JSON.parse(sessionStorage.getItem('atividade'));
    this.qtd = JSON.parse(sessionStorage.getItem('qtd'));

    this.route.queryParams.subscribe((queryParams: any) => {
      this.tipo = queryParams['tipo'];

    });

    this.colaboradorForm = new FormGroup({
      colaborador: new FormControl('', { validators: [Validators.required], updateOn: 'blur' }),

    })


    this.getAtividadebyId();
    this.getPostos();
    this.getProduto();
    this.getLinha();

  }

  selectColaborador() {

    this.existeColaborador = !this.existeColaborador

    let colaborador = this.colaboradorForm.controls['colaborador'].value;

    let idx = this.colabList.map(item => item.codigo).indexOf(+ colaborador)
    this.colab = this.colaboradores.map(item => item.codigo).indexOf(+ colaborador)


    if (this.postoFormArray.length != 0) {
      if (idx < 0) { 

        this.colabList.push(this.colaboradores[this.colab]);     
        

      } else {
        alert("Colaborador já está inserido ")
      }
    } else {
      alert("Selecione pelo menos 1 posto ")
    }

  }

  confirmarColaborador(idx) {
    if (this.postoFormArray.length == 0) {

      alert("Selecione um posto")

    }else{

      this.apiService.getUsersDigitais().subscribe((dataD: any) => {

        let param = JSON.stringify(dataD.result)
  
        this.apiService.getUrlBiometria(param).subscribe(dataU => {
          let vetor = dataD.result;
          this.usuario = vetor[dataU.indice];
  
          for (let colabAssociado in this.postoFormArray) {
  
            this.apiService.confirmarColaboradorPosto(this.codfun, this.postoFormArray[colabAssociado]).subscribe((datacolaborador: any) => {
              this.colaboradorAssociado = datacolaborador.result;             
              
  
              let responsavelTreinamento = JSON.parse(sessionStorage.getItem('codfun'));            
     
                this.apiService.callSp(this.colabList[0].codigo, this.postoFormArray.join(','),responsavelTreinamento).subscribe((dataConfirma:any)=>{
                  let confirma = dataConfirma.result;                     
                    this.idColaboradorRemover = this.colabList[0].codigo;                   
                      this.deleteRow(idx);
                      this.getPostos();               
                  
                })
            
               
            })
  
          }    
          
          alert('Associação realizada com sucesso!');
  
        })
      })

    }


  }

  getPostos() {

    let produto = JSON.parse(sessionStorage.getItem('produto'));
    let qtd = JSON.parse(sessionStorage.getItem('qtd'));
    this.atv = JSON.parse(sessionStorage.getItem('atividade'));
    let linha = JSON.parse(sessionStorage.getItem('linha'));

    if (this.atv == 42 || this.atv == 43 || this.atv == 44) {
      this.atv = '42,43,44';
    } else {
      this.atv = JSON.parse(sessionStorage.getItem('atividade'));
    }

    this.getColaboradores(this.atv);

    this.apiService.getPtConfig(produto, qtd).subscribe((dataPtConfig: any) => {
      this.PtConfig = dataPtConfig.result;

      if (this.tipo != undefined || this.tipo != null) {

        this.apiService.getTipoPostoByTipo(this.atv, this.PtConfig[0].codigo, linha, this.tipo).subscribe((dataPostosTipos: any) => {

          this.postos = dataPostosTipos.result;

        	if(this.postos == "" || this.postos == null){
						this.existepostos = true;
						this.naoExistePostos = false;
						
					  }else{
						this.existepostos = false;
						this.naoExistePostos = true;
						
					  }   
          

          for (let i = 0; i < this.postos.length; i++) {

            this.ColaboradoresAssociados(this.postos[i].codPostoTrabalho);

          }


        })

      } else {

        this.apiService.getPostoByIdProdIdAtivIdLinha(this.atv, this.PtConfig[0].codigo, linha).subscribe((dataPosto: any) => {

          this.postos = dataPosto.result;

          if(this.postos == "" || this.postos == null){
						this.existepostos = true;
						this.naoExistePostos = false;
						
					  }else{
						this.existepostos = false;
						this.naoExistePostos = true;
						
					  }   

          for (let i = 0; i < this.postos.length; i++) {

            this.ColaboradoresAssociados(this.postos[i].codPostoTrabalho);


          }

        })

      }

    })

  }

  getColaboradores(atividade) {
    this.apiService.getColaboradores(atividade).subscribe((dataColaboradores: any) => {
      this.colaboradores = dataColaboradores.result;   

      console.log("Colaboradores  =========== " , this.colaboradores);
      
      
      for( var i = 0; i < this.colaboradores.length; i++){ 
        if ( this.colaboradores[i].codigo == this.idColaboradorRemover) {
          this.colaboradores.splice(i, 1); 
          i--;
        }
     }

    
      this.colaboradores.splice(0, 0, { codigo: 0, nome: "Selecione um Colaborador" })
      this.colaboradorForm.controls.colaborador.setValue(this.colaboradores[0].codigo)



    })

  }



  listaColabAssociados(codposto, content) {
    this.showModal = true;

    this.apiService.getColaboradoresAssociados(codposto).subscribe((dataColaboradores: any) => {
      this.colaboradoresAssociados = dataColaboradores.result;

    })


  }
  hide() {
    this.showModal = false;
  }


  ColaboradoresAssociados(codposto) {
    this.apiService.getColaboradoresAssociados(codposto).subscribe((dataColaboradores: any) => {
      this.colaboradoresAssociados = dataColaboradores.result;



    })
  }



  getProduto() {
    let produto = JSON.parse(sessionStorage.getItem('produto'));

    this.apiService.getProdById(produto).subscribe((dataProduto: any) => {
      this.produto = dataProduto.result;
      this.prod = this.produto[0].nm_desc_produto;

    })

  }

  getAtividadebyId() {

    this.apiService.getAtividadeById(this.ativ).subscribe((dataAtividade: any) => {
      this.atividade = dataAtividade.result;
      this.atvd = this.atividade[0].atividade;


    })
  }

  getLinha() {

    this.apiService.getLinhaById(this.linha)
      .subscribe((data: any) => {
        this.linha = data.result;
        this.linh = this.linha[0].linha;
      })


  }


  mudouColaborador(e) {   

    if (e.target.value != 0) {
      this.disableButton = true;
    } else {
      this.disableButton = false;
    }

  }

  onChange(posto: number, isChecked: boolean) {

    if (isChecked) {
      this.postoFormArray.push(posto);
    } else {
      let index = this.postoFormArray.indexOf(posto);
      this.postoFormArray.splice(index, 1);
    }
  }

  deleteRow(id){ 
    this.colabList.splice(id,1);
   
}

sendInfo(atividade){
  var info = {
    produto:  this.prod,
    qtd: this.qtd,
    linha: this.linha[0].linha,
    atividade: atividade,
    mostrar:true
  }

  this.apiService.enviarInfo(info)

  
}

}
