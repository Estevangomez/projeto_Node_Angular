export interface PostoTrabalhoHist {
    pothId: number;
    pothPotrId: number;
    pothNomePosto: string;
    pothTiptId: number;
    pothTipoPosto: string;
    pothAnexoPop:string;
    pothAnexoErgonomia: string;
    pothAtivId: number;
    pothNomeAtividade: string;
    pothProdId: number;
    pothNomeProduto: string;
    pothQtdProduto: number;
    pothLinhId: number;
    pothCodGrupo: string;
    pothNomeLinha: string;
    pothCadaId: number;
    pothTurnId: number;
    pothNomeTurno: number;
    pothEmprId: number;
    pothNomeEmpresa: string;
    pothSetoId: number;
    pothNomeSetor: string;
    pothCargId: number;
    pothNomeCargo: string;
    pothDtInicioTrabalho: Date;
    pothDtFimTrabalho: Date;
    pothRespSessao: number;
    pothDtRegistro: Date;
    pothFinalizacao: number;
}