const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Forzamos siempre la ruta en /tmp para que funcione perfectamente en Render (Plan Gratuito)
const dbPath = "/tmp/database.sqlite";

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error al conectar con SQLite:", err.message);
  } else {
    console.log("Conectado a la base de datos metAMORfosis en SQLite:", dbPath);
  }
});

module.exports = db;
