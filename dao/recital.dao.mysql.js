import Mysql from "../db/connections/mysql.js";


export default class RecitalDaoMysql extends Mysql {

    constructor() {
        super();
        this.table = 'recitales';
    }

    async getAllRecitales() {
        const query = `SELECT * FROM ${this.table}`;
        const [result] = await this.connection.promise().query(query);
        return result;
    }
}




