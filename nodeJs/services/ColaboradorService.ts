import { Connection } from './../conn/connection';

class ColaboradorService{

    conn: Connection;
    
    constructor() {
        this.conn = new Connection();
    }
    
    all(){

        return new Promise((resolve, rejects)=>{

            this.conn.digiboard.connect( (err) => {
                if(err){ return console.log(err); }
            } );

            this.conn.digiboard.query('SELECT * FROM colaborador', (error, results) =>{

                if(error){
                    rejects({
                            error,
                            msg: 'Houve um problema ao listar colaboradores'
                        })
                    return
                }

                resolve(results);

            });

        });
 
    }

    inserir(req){

        return new Promise((resolve, rejects)=>{

            const query = `INSERT INTO colaborador (nome,email,telefone,empresa,setor,id_cargo) VALUES(?,?,?,?,?,?)`;
            const data = [                
                req.nome,
                req.email,
                req.telefone,
                req.empresa,
                req.setor,
                req.id_cargo
                
            ];           
            
            this.conn.digiboard.query(query,data, (error, results) => {

                if(error){
                    console.log('error', error);
                    
                    rejects({
                            error,
                            msg: ['Houve um problema ao inserir Colaborador']
                        })
                    return
                }
               
                resolve(results);

            });

        });
 
    }

    findById(_id){

        return new Promise( (resolve, rejects) => {

            this.conn.digiboard.query(`SELECT * FROM colaborador WHERE codigo = ?`, [_id],  (error, results) => {

                if(error){
                    rejects({
                            error,
                            msg: 'Houve um problema ao listar colaborador'
                        })
                    return
                }
               
                resolve(results);

            })

        })

    }

    delete(_id){

        return new Promise( (resolve, rejects) => {

            this.conn.digiboard.query(`DELETE FROM colaborador WHERE codigo = ?`, [_id],  (error, results) => {

                if(error){
                    rejects({
                            error,
                            msg: 'Houve um problema ao remover colaborador'
                        })
                    return
                }
               
                resolve(results);

            })

        })

    }

    update(req,idcolaborador){

        return new Promise( (resolve, rejects) => {

            const query = 'UPDATE colaborador SET nome=?,email=?,telefone=?,empresa=?,setor=?,id_cargo=? WHERE codigo = ?';
            const data = [                
                req.nome,
                req.email,
                req.telefone,
                req.empresa,
                req.setor,
                req.id_cargo,
                idcolaborador
                
            ];
           
            this.conn.digiboard.query(query,data, (error, results) => {

                if(error){
                    rejects({
                            error,
                            msg: 'Houve um problema ao remover colaborador'
                        })
                    return
                }
               
                resolve(results);

            })

        })

    }
/**************************************CARGO  ************************************************ */
    getAllCargo(){

        return new Promise((resolve, rejects)=>{

            this.conn.digiboard.connect( (err) => {
                if(err){ return console.log(err); }
            } );

            this.conn.digiboard.query('SELECT * FROM cargo', (error, results) =>{

                if(error){
                    rejects({
                            error,
                            msg: 'Houve um problema ao listar cargos'
                        })
                    return
                }

                resolve(results);

            });

        });
 
    }

    inserirNewCargo(req){

        return new Promise((resolve, rejects)=>{

            const query = `INSERT INTO cargo (descricao) VALUES(?)`;
            const data = [                
                req.descricao
                
            ];           
            
            this.conn.digiboard.query(query,data, (error, results) => {

                if(error){
                    console.log('error', error);
                    
                    rejects({
                            error,
                            msg: ['Houve um problema ao inserir Colaborador']
                        })
                    return
                }
               
                resolve(results);

            });

        });
 
    }

}

export default new ColaboradorService();