import express from 'express';
import pkg from 'pg';

const {Pool } = pkg;
const app = express();
const pool = new Pool ({
    host:"localhost",
    user:"postgres",
    port: 5432,
    password:"1222",
    database:"postgres"
});
app.get("/",(req,res)=>{
    res.send("HEELLOOO");
})
pool.connect().then(()=>{
    console.log('connected postgre');
})