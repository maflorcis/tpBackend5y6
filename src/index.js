import express from 'express';
import morgan from "morgan";
import cors from 'cors';
import path from 'path';
import './database'
import recetasRouter from "./routes/recetas.routes"
import './database'


const app=express();
app.set('port',process.env.PORT || 4001) ;
app.listen (app.get('port'),()=>{
console.log('Estoy en el puerto' + app.get ('port'));})



console.log('florencia')

//middlewares: funciones que se ejecutan antes de las rutas
app.use(morgan('dev'));

//permitir peticiones remotas
app.use(cors());
//middlewares para interpretar los objetos json que llegan en las peticiones
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//cargar un archivo estático
app.use(express.static(path.join(__dirname, '../public')));
console.log(path.join(__dirname, '../public'))

app.use('/apiblog', recetasRouter)