const db = require('./db')
const helper = require('../helper')
const config = require('../config')

{/*FUNCIONES PARA EL CRUD */}

// Función con la consulta para insertar datos en la base de datos: INSERT
async function insertData(req, res) {
  const data = req.body; // Cambiado a req.body

  // Verificar que los valores no son undefined antes de pasarlos a la consulta
  if (data.nombre === undefined || data.marca === undefined || data.tipo === undefined || data.precio === undefined) {
    console.error('Error: Alguno de los valores es undefined.', data);
    return 0; // O cualquier otro valor que desees devolver para indicar un error
  }

  const result = await db.query(
    `INSERT INTO coleccion (nombre, marca, tipo, precio) VALUES (?, ?, ?, ?)`,
    [data.nombre, data.marca, data.tipo, data.precio]
  );
  return result.affectedRows;
}



// Función con la consulta de obtener datos de la base de datos: SELECT * FROM COLECCION
async function getData() {
  const rows = await db.query(`SELECT * FROM coleccion`);
  const data = helper.emptyOrRows(rows);
  return {
    data,
  };
}


// Agrega esta nueva función para eliminar todos los registros
async function deleteDataByID(data) {
  const result = await db.query(`DELETE FROM coleccion WHERE id = ?`, [data.id]);
  return result.affectedRows;
}



// Agrega la nueva función para obtener datos de la colección
async function getColeccion() {
  const rows = await db.query(`SELECT * FROM coleccion`);
  const data = helper.emptyOrRows(rows);
  return {
    data,
  };
}


{/* FUNCIONES PARA LA GESTIÓN DE USUARIOS */}

// Función con la consulta para insertar usuarios en la base de datos bdgestion
async function insertUsers(req, res) {
  const data = req.body; // Cambiado a req.body

  // Verificar que los valores no son undefined antes de pasarlos a la consulta
  if (data.nombre === undefined || data.login === undefined || data.password === undefined || data.rol === undefined) {
    console.error('Error: Alguno de los valores es undefined.', data);
    return 0; // O cualquier otro valor que desees devolver para indicar un error
  }

  const result = await db.query(
    `INSERT INTO usuarios (nombre, login, password, rol) VALUES (?, ?, ?, ?)`,
    [data.nombre, data.login, data.password, data.rol]
  );
  return result.affectedRows;
}


// Función con la consulta de obtener datos de la base de datos: SELECT * FROM COLECCION
async function getUsers() {
  const rows = await db.query(`SELECT * FROM usuarios`);
  const data = helper.emptyOrRows(rows);
  return {
    data,
  };
}






// Exporta la nueva función
module.exports = {
  getData,
  insertData,
  deleteDataByID,
  insertUsers,
  getUsers,
  getColeccion, // Agrega esta línea
};