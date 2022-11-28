const express= require('express');

const server = express();
server.use(express.json());

const cursos=['Fullstack master', 'Desenvolvimento de games', 'Programação']

//retornar um curso
server.get('/cursos/:index', (req,res)=>{
    const {index}= req.params
    return res.json(cursos[index])
})
//retornar todos os cursos
server.get('/cursos', (req,res)=>{
    return res.json(cursos)
})
//criar um novo curso
server.post('/cursos', (req,res)=>{
    const {name}= req.body
    cursos.push(name)
    return res.json(cursos)
})
//atualizar um curso
server.put('/cursos/:index', (req, res)=>{
    const{index}= req.params
    const{name}= req.body
    cursos[index]= name
    return res.json(cursos)
})
//deletar um curso
server.delete('/cursos/:index', (req, res)=>{
    const {index}= req.params
    cursos.slice(index,1)
    return res.json({message:'o arquivo foi deletado com sucesso'})
})

server.listen(3332,()=> console.log('oi'))