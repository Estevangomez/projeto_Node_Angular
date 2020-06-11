import * as mysql from 'mysql';


export class Connection{     
    digiboard = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'digiboard'

    });


}
