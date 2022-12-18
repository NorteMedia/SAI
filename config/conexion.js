const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'franck5532',
  password: 'AdminSAI17d',
  database: 'admin_sai_backend'
});

client.connect((err) => {
  if (err) {
    console.error('Error de conexión:', err.stack);
  } else {
    console.log('Conectado a la base de datos');
  }
});
