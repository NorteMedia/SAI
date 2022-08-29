//hola uwu
const router = require ('express').Router()
const conexion =  require ('./config/conexion')
const Head = require("./controllers/head.controller");

//---------- agregamos rutas--------


/* SERVICIO TABLA HEAD */

router.get("/head/getall", Head.findAll);
router.post("/head/add/", Head.create);

/* SERVICIO GERENCIA DATOS */

router.get('/gerencia/getall',(req, res)=>{
    let sql ='select * from sai_prod.gerencia'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//agregar gerencia
router.post('/gerencia/add/',( req, res)=>{
    const{id_gerencia, email_gerencia,nombre_gerente, direccion_gerencia, id_head} = req.body

    let sql = `insert into sai_prod.gerencia(id_gerencia, email_gerencia,nombre_gerente, direccion_gerencia, id_head) 
    values('${id_gerencia}','${email_gerencia}','${nombre_gerente}','${direccion_gerencia}','${id_head}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'la gerencia fue agregada'})
        }
    })
})

// get una gerencia
router.get('/gerencia/:id',(req, res)=>{
    const {id} = req.params
    let sql ='select * from sai_prod.gerencia where id_gerencia = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//eliminar gerencia
router.delete('/gerencia/:id',(req, res)=>{
    const{id} = req.params

    let sql =`delete from sai_prod.gerencia where id_gerencia = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'la gerencia se ha eliminado'})
        }
    })
});

//modificar gerencia
router.put('/gerencia/:id',(req, res)=>{
    const{id}=req.params
    const{id_gerencia, email_gerencia,nombre_gerente, direccion_gerencia, id_head} = req.body

    let sql = `update sai_prod.gerencia set 
                id_gerencia ='${id_gerencia}',
                email_gerencia='${email_gerencia}',
                nombre_gerente='${nombre_gerente}',
                direccion_gerencia='${direccion_gerencia}',
                id_head = '${id_head}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'La Gerencia se ha modificado'})
        }
    })
})


//PRESENTACION
router.get('/credito/getcreditosactivosejecutivo',(req, res)=>{
    let sql =`select sai_prod.cliente.nombre_Cliente,  sai_prod.credito.*  from sai_prod.credito
    JOIN sai_prod.cliente ON sai_prod.cliente.id_cliente = sai_prod.credito.id_cliente
    WHERE estado_credito = 1 AND id_ejecutivo = 37;`
    
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

router.get('/credito/getcontadorgerencia',(req, res)=>{
    let sql =`SELECT count(*) as contador FROM sai_prod.cliente where id_gerencia = 5;`
    
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

router.get('/ejecutivo/getdatoscompletos',(req, res)=>{
    let sql =`SELECT * FROM sai_prod.ejecutivo 
    JOIN gerencia ON gerencia.id_gerencia=ejecutivo.id_gerencia
    JOIN head ON gerencia.id_head=head.id_head
    where id_ejecutivo = 36 ;`
    
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})



//abono_credito
router.get('/abonocredito/getall',(req, res)=>{
    let sql ='select * from sai_prod.abono_credito'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})
//agregar abono_credito
router.post('/abonocredito/add/',( req, res)=>{
    const{id_abono_credito, fecha_abono_credito,folio_credito_abono, cantidad_abono, id_ejecutivo_abono, id_cliente_abono} = req.body

    let sql = `insert into sai_prod.abono_credito(id_abono_credito, fecha_abono_credito,folio_credito_abono, cantidad_abono, id_ejecutivo_abono, id_cliente_abono) 
    values('${id_abono_credito}','${fecha_abono_credito}','${folio_credito_abono}','${cantidad_abono}','${id_ejecutivo_abono}','${id_cliente_abono}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'El abono-credito fue agregado'})
        }
    })
})

// get una abono_credito
router.get('/abonocredito/:id',(req, res)=>{
    const {id} = req.params
    let sql ='select * from sai_prod.abono_credito where id_abono_credito = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//eliminar abono_credito
router.delete('/abonocredito/:id',(req, res)=>{
    const{id} = req.params

    let sql =`delete from sai_prod.abono_credito where id_abono_credito = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'El abono-credito se ha eliminado'})
        }
    })
});

//modificar abono_credito
router.put('/abonocredito/:id',(req, res)=>{
    const{id}=req.params
    const{id_abono_credito, fecha_abono_credito,folio_credito_abono, cantidad_abono, id_ejecutivo_abono, id_cliente_abono} = req.body

    let sql = `update sai_prod.abono_credito set 
                id_abono_credito ='${id_abono_credito}',
                fecha_abono_credito='${fecha_abono_credito}',
                folio_credito_abono='${folio_credito_abono}',
                cantidad_abono='${cantidad_abono}',
                id_ejecutivo_abono = '${id_ejecutivo_abono}',
                id_cliente_abono = '${id_cliente_abono}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'El abono-credito se ha modificado'})
        }
    })
})




//calculadora_cobranza
router.get('/calculadoracobranza/getall',(req, res)=>{
    let sql ='select * from sai_prod.calculadora_cobranza'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//agregar calculadora_cobranza
router.post('/calculadoracobranza/add/',( req, res)=>{
    const{id_calculadora_cobranza, lunes_cobranza,martes_cobranza, miercoles_cobranza, jueves_cobranza, viernes_cobranza, sabado_cobranza, meta_cobranza, fecha_cobranza, id_ejecutivo} = req.body

    let sql = `insert into sai_prod.calculadora_cobranza(id_calculadora_cobranza, lunes_cobranza,martes_cobranza, miercoles_cobranza, jueves_cobranza, viernes_cobranza,sabado_cobranza,meta_cobranza, fecha_cobranza, id_ejecutivo) 
    values('${id_calculadora_cobranza}','${lunes_cobranza}','${martes_cobranza}','${miercoles_cobranza}','${jueves_cobranza}'),'${viernes_cobranza}'),'${sabado_cobranza}'),'${meta_cobranza}'),'${fecha_cobranza}'),'${id_ejecutivo}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'la calculadora_cobranza fue agregada'})
        }
    })
})

// get una calculadora_cobranza
router.get('/calculadoracobranza/:id',(req, res)=>{
    const {id} = req.params
    let sql ='select * from sai_prod.calculadora_cobranza where id_calculadora_cobranza = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//eliminar calculadora_cobranza
router.delete('/calculadoracobranza/:id',(req, res)=>{
    const{id} = req.params

    let sql =`delete from sai_prod.calculadora_cobranza where id_calculadora_cobranza = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'La calculadora se ha eliminado'})
        }
    })
});

//modificar calculadora_cobranza
router.put('/calculadoracobranza/:id',(req, res)=>{
    const{id}=req.params
    const{id_calculadora_cobranza, lunes_cobranza,martes_cobranza, miercoles_cobranza, jueves_cobranza, viernes_cobranza, sabado_cobranza, meta_cobranza, fecha_cobranza, id_ejecutivo} = req.body

    let sql = `update sai_prod.calculadora_cobranza set 
                id_calculadora_cobranza ='${id_calculadora_cobranza}',
                lunes_cobranza='${lunes_cobranza}',
                martes_cobranza='${martes_cobranza}',
                miercoles_cobranza='${miercoles_cobranza}',
                jueves_cobranza = '${jueves_cobranza}',
                viernes_cobranza = '${viernes_cobranza}',
                sabado_cobranza = '${sabado_cobranza}',
                meta_cobranza = '${meta_cobranza}',
                fecha_cobranza = '${fecha_cobranza}',
                id_ejecutivo = '${id_ejecutivo}'`
                
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'La calculadora cobranza se ha modificado'})
        }
    })
})





//calculadora_colocacion
router.get('/calculadoracolocacion/getall',(req, res)=>{
    let sql ='select * from sai_prod.calculadora_colocacion'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//agregar calculadora_colocacion
router.post('/calculadoracolocacion/add/',( req, res)=>{
    const{id_calculadora_colocacion, lunes_colocacion,martes_colocacion, miercoles_colocacion, jueves_colocacion, viernes_colocacion, sabado_colocacion, meta_colocacion, fecha_colocacion, id_ejecutivo_colocacion, id_gerencia_colocacion} = req.body

    let sql = `insert into sai_prod.calculadora_colocacion(id_calculadora_cobranza, lunes_colocacion,martes_colocacion, miercoles_colocacion, jueves_colocacion, viernes_colocacion,sabado_colocacion,meta_colocacion, fecha_colocacion, id_ejecutivo_colocacion, id_gerencia_colocacion) 
    values('${id_calculadora_colocacion}','${lunes_colocacion}','${martes_colocacion}','${miercoles_colocacion}','${jueves_colocacion}'),'${viernes_colocacion}'),'${sabado_colocacion}'),'${meta_colocacion}'),'${fecha_colocacion}'),'${id_ejecutivo_colocacion}'),'${id_gerencia_colocacion}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'la calculadora colocacion fue agregada'})
        }
    })
})

// get una calculadora_colocacion
router.get('/calculadoracolocacion/:id',(req, res)=>{
    const {id} = req.params
    let sql ='select * from sai_prod.calculadora_colocacion where id_calculadora_cobranza = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//eliminar calculadora_colocacion
router.delete('/calculadoracolocacion/:id',(req, res)=>{
    const{id} = req.params

    let sql =`delete from sai_prod.calculadora_colocacion where id_calculadora_cobranza = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'calculadora colocacion se ha eliminado'})
        }
    })
});

//modificar calculadora_colocacion
router.put('/calculadoracolocacion/:id',(req, res)=>{
    const{id}=req.params
    const{id_calculadora_colocacion, lunes_colocacion,martes_colocacion, miercoles_colocacion, jueves_colocacion, viernes_colocacion, sabado_colocacion, meta_colocacion, fecha_colocacion, id_ejecutivo_colocacion, id_gerencia_colocacion} = req.body

    let sql = `update sai_prod.calculadora_colocacion set 
    id_calculadora_colocacion ='${id_calculadora_colocacion}',
    lunes_colocacion='${lunes_colocacion}',
    martes_colocacion='${martes_colocacion}',
    miercoles_colocacion='${miercoles_colocacion}',
    jueves_colocacion = '${jueves_colocacion}',
    viernes_colocacion = '${viernes_colocacion}',
    sabado_colocacion = '${sabado_colocacion}',
    meta_colocacion = '${meta_colocacion}',
    fecha_colocacion = '${fecha_colocacion}',
    id_ejecutivo_colocacion = '${id_ejecutivo_colocacion}',
    id_gerencia_colocacion = '${id_gerencia_colocacion}'`
                
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'La calculadora colocacion se ha modificado'})
        }
    })
})







//calculadora_diaria_ejecutivo
router.get('/calculadoradiariaejecutivo/getall',(req, res)=>{
    let sql ='select * from sai_prod.calculadora_diaria_ejecutivo'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//calculadora_general
router.get('/calculadorageneral/getall',(req, res)=>{
    let sql ='select * from sai_prod.calculadora_general'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})




//cliente
router.get('/cliente/getall',(req, res)=>{
    let sql ='select * from sai_prod.cliente'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//agregar Cliente
router.post('/cliente/add/',( req, res)=>{
    const{id_cliente,nombre_aval,numero_cliente_gerencia,nombre_cliente,direccion_cliente,telefono_cliente,ultimo_credito,referencia_cliente,id_gerencia} = req.body

    let sql = `insert into sai_prod.cliente(id_cliente,nombre_aval,numero_cliente_gerencia,nombre_cliente,direccion_cliente,telefono_cliente,ultimo_credito,referencia_cliente,id_gerencia) 
    values('${id_cliente}','${nombre_aval}','${numero_cliente_gerencia}','${nombre_cliente}','${direccion_cliente}'),'${telefono_cliente}'),'${ultimo_credito}'),'${referencia_cliente}'),${id_gerencia}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'la c fue agregada'})
        }
    })
})

// get un Cliente
router.get('/cliente/:id',(req, res)=>{
    const {id} = req.params
    let sql ='select * from sai_prod.calculadora_cobranza where id_calculadora_cobranza = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//eliminar Cliente
router.delete('/cliente/:id',(req, res)=>{
    const{id} = req.params

    let sql =`delete from sai_prod.calculadora_cobranza where id_calculadora_cobranza = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'La calculadora se ha eliminado'})
        }
    })
});

//modificar Cliente
router.put('/cliente/:id',(req, res)=>{
    const{id}=req.params
    const{id_cliente,nombre_aval,numero_cliente_gerencia,nombre_cliente,direccion_cliente,telefono_cliente,ultimo_credito,referencia_cliente,id_gerencia} = req.body

    let sql = `update sai_prod.calculadora_cobranza set 
                id_cliente='${id_cliente}',
                nombre_aval='${nombre_aval}',
                numero_cliente_gerencia='${numero_cliente_gerencia}',
                nombre_cliente='${nombre_cliente}',
                direccion_cliente= '${direccion_cliente}',
                telefono_cliente= '${telefono_cliente}',
                ultimo_credito= '${ultimo_credito}',
                referencia_cliente= '${referencia_cliente}',
                id_gerencia= '${id_gerencia}'`
                
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'La calculadora cobranza se ha modificado'})
        }
    })
})






//conteo_creditos
router.get('/conteocreditos/getall',(req, res)=>{
    let sql ='select * from sai_prod.conteo_creditos'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//credito_nuevo
router.get('/creditonuevo/getall',(req, res)=>{
    let sql ='select * from sai_prod.credito_nuevo'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//credtitos_activos
router.get('/creditosactivos/getall',(req, res)=>{
    let sql ='select * from sai_prod.creditos_activos'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//ejecutivo
router.get('/ejecutivo/getall',(req, res)=>{
    let sql ='select * from sai_prod.ejecutivo'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//gasolina_semanal
router.get('/gasolina/getall',(req, res)=>{
    let sql ='select * from sai_prod.gasolina_semanal'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//interes_semanal
router.get('/interessemanal/getall',(req, res)=>{
    let sql ='select * from sai_prod.interes_semanal'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//salida
router.get('/salida/getall',(req, res)=>{
    let sql ='select * from sai_prod.salida'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//traspaso
router.get('/traspaso/getall',(req, res)=>{
    let sql ='select * from sai_prod.traspaso'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})



//get equipos
router.get('/',(req, res)=>{
    let sql ='select * from head'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

// get un equipo
router.get('/:id',(req, res)=>{
    const {id} = req.params
    let sql ='select * from clientes where id_cliente = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//agregar equipo
router.post('/',( req, res)=>{
    const{nombre, direccion,telefono} = req.body

    let sql = `insert into clientes(nombre, direccion,telefono) values('${nombre}','${direccion}','${telefono}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'El cliente fue agregado'})
        }
    })
})

//eliminar equipo
router.delete('/:id',(req, res)=>{
    const{id} = req.params

    let sql =`delete from clientes where id_cliente = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'El cliente se ha eliminado'})
        }
    })
});

//modificar equipo
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{nombre, direccion,telefono} = req.body

    let sql = `update clientes set 
                nombre ='${nombre}',
                direccion='${direccion}',
                telefono='${telefono}',
                where id_equipo = '${id}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'El cliente se ha modificado'})
        }
    })
})
//----------------------------------

module.exports=router;