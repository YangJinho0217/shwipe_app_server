const mapper = require("../loaders/mapper");
const dbconfig = require("../config/db");
const mysql = require("mysql2/promise");
const pool = mysql.createPool(dbconfig);

const query = {
  query: async (nameSpace, selectId, param) => {
    const con = await pool.getConnection(async (conn) => conn);
    const sql = mapper.getStatement(nameSpace, selectId, param, {
      language: "sql",
      indent: "  ",
    });
    console.log("----------------------------------------");
    console.log(sql);
    console.log("----------------------------------------");
    const [rows, fields] = await con.query(sql).catch(async (err) => {
      con.connection.release();
      throw err;
    });

    console.log(rows);

    con.connection.release();
    return rows;
  },
};

module.exports = query;
