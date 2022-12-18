const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    port: '5432',
    user: 'franck5532',
    password: 'AVNS_8oCZ2HHoszYCU0o',
    database: 'sai_prod'
});

conexion.connect((err)=>{
    if(err){
        conexion.log('Ha ocurrido un error :'+ err)
    }
    else
    {console.log(' La base de datos se conecto!!!')}
});

module.exports=conexion