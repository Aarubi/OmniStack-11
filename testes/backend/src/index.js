const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de Parâmetros
   * 
   * Query Params: Parâmetros nomeados enviados na rota após o símbolo '?' (filtros, paginação)
   * Route Params: Parâmetros usados para identificar recursos
   * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
   */
    /**
     * Banco de Dados
     * SQL: MySQL SQLite PostgreSQL, Oracle, Microsoft SQL Server
     * NoSQLP: MongoDB, CouchDB, etc
     */
    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */


app.listen(3333);
