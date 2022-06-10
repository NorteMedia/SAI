const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: '192.81.218.226',
    port: '3306',
    user: 'franck5532',
    password: 'AVNS_8oCZ2HHoszYCU0o',
    database: 'db_basico'
});

conexion.connect((err)=>{
    if(err){
        conexion.log('Ha ocurrido un error :'+ err)
    }
    else
    {console.log(' La base de datos se conecto!!!')}
});

module.exports=conexion