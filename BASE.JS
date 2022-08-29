/* //agregar 
router.post('//add/',( req, res)=>{
    const{} = req.body

    let sql = `insert into sai_prod.calculadora_cobranza() 
    values('${}','${}','${}','${}','${}'),'${}'),'${}'),'${}'),'${}'),'${}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'la c fue agregada'})
        }
    })
})

// get una 
router.get('//:id',(req, res)=>{
    const {id} = req.params
    let sql ='select * from sai_prod.calculadora_cobranza where id_calculadora_cobranza = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//eliminar 
router.delete('//:id',(req, res)=>{
    const{id} = req.params

    let sql =`delete from sai_prod.calculadora_cobranza where id_calculadora_cobranza = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'La calculadora se ha eliminado'})
        }
    })
});

//modificar 
router.put('//:id',(req, res)=>{
    const{id}=req.params
    const{} = req.body

    let sql = `update sai_prod.calculadora_cobranza set 
                ='${}',
                ='${}',
                ='${}',
                ='${}',
                = '${}',
                = '${}',
                = '${}',
                = '${}',
                = '${}',
                = '${}'`
                
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'La calculadora cobranza se ha modificado'})
        }
    })
}) */