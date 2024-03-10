var express = require('express');
var router = express.Router(); 
let db = require('../utils/db');

/* editar FILMES */ 
router.get('/edit/:id', function(req, res ){
  let id = req.params.id; 
  let cmd = "SELECT id_avaliacao, nome_filme, id_produtora, horas_filme , id_genero FROM tb_filme WHERE id_filme = ?; ";
  db.query(cmd, [id], function(erro, listagem){
    if(erro){
      res.send(erro); 
    } 
    res.render('filmes_add', {resultado: listagem[0]}); 
  })
});

/* editar FILMES */
router.put('/edit/:id', function(req, res ){
  let id        = req.params.id; 
  let nome      = req.body.nome; 
  let produtora = req.body.produtora; 
  let horas     = req.body.horas; 
  let genero    = req.body.genero; 
  let cmd = 'UPDATE tb_filme SET nome_filme= ?, id_produtora=?, horas_filme=?, id_genero=? WHERE id_filme = ?; '; 
  db.query(cmd, [nome, produtora, horas, genero, id], function(erro, listagem){ 
    if(erro){
      res.send(erro); 
    } 
    res.redirect(303, '/filmes/listar'); 
  })
});
module.exports = router; 
