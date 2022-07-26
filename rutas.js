const router = require ('express').Router()
const conexion= require ('./config/conexion')


//---------- agregamos rutas--------


/* SERVICIO TABLA HEAD */

router.get('/head/getall',(req, res)=>{
    let sql ='select * from head'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})


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