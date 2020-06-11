import { ProdutoConfigLinhaDia } from './../interfaces/produtoConfigLinhaDia';
import { Usuario } from './../interfaces/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilsService } from '../utils/utils.service';
import { map } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';
//import {url}  from './../utils/utils.service';



//import { map } from 'rxjs/add/operator/map';



@Injectable()
export class ApiService {

    private url: any;
    private urlBiometriaCad: any = 'http://localhost:9000/api/public/v1/captura/Identify';
    usuario: Usuario;
    mostrarInfoEmitter = new EventEmitter<any>();	
    mostrarVoltar = new EventEmitter<any>();



    constructor(private http: HttpClient, private endPoint: UtilsService) { }

    /****************************  PRODUTO  ****************************************/

    getProdConfigById(id: number) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "produto/produto-config/" + id);
    }

    getProduto(): Observable<any> {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "produto/produto");
    }

    getProdById(id: number): Observable<any> {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "produto/produto/" + id);
    }

    getProdByIdFamilia(idlinha: any, idfamilia: any): Observable<any> {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "produto/produto-familia/" + idlinha + "/" + idfamilia);
    }

    getProdByParams(idlinha, codprod, status) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "produto/config-linha-dia/" + codprod + "/" + idlinha + "/" + status);
    }

    createProdConfigLinhDia(produto: any) {
        this.url = this.endPoint.getEndPoint();
        return this.http.post(this.url + "produto/config-linha-dia/", produto);

    }

    getQtdByIdProd(id: number) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "produto/produto/qtd/" + id);

    }

    getProdPTreinarColab(id: any) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "produto/escolher-produto-treinar-colaborador/" + id);

    }

    getProdByIdLinha(idlinha: any) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "produto/conf-linha-dia/" + idlinha);

    }

    getProdByIdlinhaAssociar(idlinha:any){
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "produto/config-linha/" + idlinha);
    }

    getProdByIdTreinarColab(idproduto: any, idlinha: any) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "produto/getProdutoById/" + idproduto + "/" + idlinha);

    }

    getProdConfLinhaByIdLinha(idprodConflinha: any, idlinha: any, qtd: any) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "produto/produto-config/" + idprodConflinha + "/" + idlinha + "/" + qtd);

    }

    escolherProdutoFinalizarColab(idlinha:any) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "produto/escolher-produto-finalizar-colaborador/"+idlinha);

    }

    FinalizarPosto(idlinha:any) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "produto/finalizar-colaborador/"+idlinha);

    }

    FinalizarTodosPosto(produto:any,qtd:any,idlinha:any) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "posto/desvincular-posto/"+produto+"/"+qtd+"/"+idlinha);

    }

    /**************************PRODUTO CONFIG**************************************************************************** */
    getPtConfig(idproduto, qtd) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "produto/produto-config/" + idproduto + "/" + qtd);
    }

    getPtConfigByCodPtByIdlinha(ptconfig:any,idlinha:any){
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "produto/config-linha-dia/" + ptconfig + "/" + idlinha);
    }

    /****************************     POSTO  ***************************************************/

    getPosto() {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + 'posto/posto');
    }

    getPostoByIdAtiv(id: number) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "posto/posto/" + id);
    }

    getPostoByIdPosto(idposto: any) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "posto/" + idposto);
    }

    getTipoPostoAll() {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "tipo-posto");
    }

    getPostoByIdProdIdAtivIdLinha(idatividade: any, idprodconfig: any, idlinha: any) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "posto/" + idatividade + "/" + idprodconfig + "/" + idlinha);
    }

    getVazioPreenchido(idatividade: any, idprodconfig: any, idlinha: any) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "posto/getVazioPreenchido/" + idatividade + "/" + idprodconfig + "/" + idlinha);
    }

    putAssociarColabPosto(idposto,resp_sessao:any, posto: any) {
        this.url = this.endPoint.getEndPoint();
        return this.http.put(this.url + "posto/posto/" + idposto +"/"+resp_sessao, posto);
    }

    getColaboradores(idatividade: any) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "posto/treinamento-colaborador/" + idatividade);
    }

    getLideres() {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "posto/treinamento-lider/getLideres");
    }

    getColaboradoresAssociados(idposto: any) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "posto/colaboradores-associados/" + idposto);
    }

    getColaborador(idatividade, idcolaborador: any) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "posto/treinamento-colaborador/colaborador/" + idatividade + "/" + idcolaborador);
    }

    getColaboradoresPosto(ptconfiglinha:any,ptconfig:any,idlinha:any){
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "produto/getColaboradoresPosto/" + ptconfiglinha + "/" + ptconfig+"/"+idlinha);
    }

    getColaboradoresLinha(idlinha:any){
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "produto/getColaboradoresLinha/" + idlinha);
    }

    confirmarColaboradorPosto(codfun, idposto) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "posto/treinamento-colaborador/confirmar/" + codfun + "/" + idposto);
    }

    updateFinalizarPosto(codigo) {
        this.url = this.endPoint.getEndPoint();
        return this.http.put(this.url + "posto/finalizarTodos/",codigo);
    }

    getProdutoFinalizarPosto(linha:any,atividade:any,codprod:any){
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "posto/getProduto-finalizar-posto/"+linha+"/"+atividade+"/"+codprod);
    }

    getColaboradorFinalizarPosto(linha:any,atividade:any,codprod:any){
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "posto/getColaborador-finalizar-posto/"+linha+"/"+atividade+"/"+codprod);
    }

    findIdProdutoConfigByPosto(posto:any){
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "posto/getCodProdutoConfigLinha/"+posto);
    }

    updateFinalizarPostoByAtividade(atividade:any,ptconfigLinha:any){
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "atividade/finalizar-posto-atividade/"+atividade+"/"+ptconfigLinha);
    }

    
    getQtyStaffsPosto(cod_produto_config_linha:any){
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "posto/getQtyStaffsPosto/"+cod_produto_config_linha);
    }

    updateFinalizarPostoByCodposto(codposto:any){
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "posto/updateFinalizarPostoByCodposto/"+codposto);
    }

    
    getCodTuplaProdConfLinhaDia(cod_produto_config_linha:any){
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "produto/getCodTuplaProdConfLinhaDia/"+cod_produto_config_linha);
    }

    updateProdConfLinhaDia(cod_produto_config_linha:any){
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "produto/updateProdConfLinhaDia/"+cod_produto_config_linha);
    }




    /**********************************TIPO POSTO  ***************************************************************** */

    getTipoPostoById(idtipo) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "posto/tipo/" + idtipo);
    }

    getTipoPostoTrabalho(idprod, qtd, idlinha, atividade) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "posto/tipo/" + idprod + "/" + qtd + "/" + idlinha + "/" + atividade);
    }

    getTipoPostoByTipo(atividade, idprod, idlinha, tipoPosto) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "posto/tipoPosto/" + atividade + "/" + idprod + "/" + idlinha + "/" + tipoPosto);
    }

    /********************************** LINHA  ******************************************************* */


    getLinha(): Observable<any> {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + 'linha');
    }
    getLinhaById(id: any) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + 'linha/' + id);
    }

    getLinhaByIdEmpresa(idEmpresa: number) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + 'linha/empresa/' + idEmpresa);
    }



    /*************************************  ATIVIDADE ************************************************************** */

    getConfigAtividade() {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "produto/config-atividade");

    }

    getAtividades(idprodconfig: any) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "atividade/escolher-atividade/" + idprodconfig);
    }

    getAtividadeById(idatividade: any) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "atividade/" + idatividade);
    }

    finalizarByAtividade(idprod:any,qtd:any,idlinha:any) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "atividade/finalizar-atividade/" + idprod+"/"+qtd+"/"+idlinha);
    }

    /**************************************** BIBLIOTECA  ***************************************************************************/
    getBiblioteca(): Observable<any> {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "biblioteca");
    }
 /*******************************************************  EMPRESAS  ***************************************************************************************** */
    getEmpresas(){
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + "linha/getEmpresa/empresas");

    }

    /************************************************USUARIOS COM DIGITAIS CADASTRADAS  ********************************************************************************* */

    getUsersDigitais() {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + 'users-cadastrados');
    }

    checarEngn() {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + 'users-cadastrados/checarEngh');
    }

    /****************************************************** URL Biometria  *********************************************************************************** */

    getUrlBiometria(usuario: any): Observable<any> {
        // this.url = this.endPoint.getUrlBiometria();
        return this.http.post(this.urlBiometriaCad, usuario)

    }
    /*****************************************************   FAMÍLIA   ************************************************************************************************** */
    getFamilia() {
        this.url = this.endPoint.getEndPoint()
        return this.http.get(this.url + 'familia');


    }

    /***************************************************     CDT  ************************************************************************************************************** */

    getCdtMatrizAtividade(idatividade) {
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url + 'cdt/getMatriz/' + idatividade);
    }

   
    /*******************************************************Procedure********************************************************************************************** */


    callSp(cofun,postos,responsavelTreinamento){
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url+"posto/treinamento-colaborador/confirmar-treinamento/"+cofun+"/"+postos+"/"+responsavelTreinamento);

    }

    callFinalizar(idlinha,produtos){
        this.url = this.endPoint.getEndPoint();
        return this.http.get(this.url+"posto/"+idlinha+"/"+produtos);

    }


    /***************************************************************************************************************************************************** */

   enviarInfo(info:any){
       this.mostrarInfoEmitter.emit(info);
   }

   enviarMostrarVoltar(mostrarVoltar){
       this.mostrarVoltar.emit(mostrarVoltar)
   }

   

}