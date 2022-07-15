const router = require ('express').Router()
const conexion= require ('./config/conexion')


//---------- agregamos rutas--------


/* SERVICIO TABLA HEAD */

router.get('/head/getalla',(req, res)=>{
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
    let sql ='select * from head'
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