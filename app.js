import {} from 'dotenv/config'
import {Server} from './models/server.js';

const server = new Server();
const data = []
const Quien = ["Pedro, Juan, Carlos, Juanita, Antonio, Carolina, Manu"];
const Modulo = ["Nomina", "Facturación", "Recibos", "Comprobante", "contable", "Usuarios", "Contabilidad"]
const error = ["404, Stack overflow, Memory out of range, Null pointer  , Syntax error, Encoding error"]

server.listen();

export {data}