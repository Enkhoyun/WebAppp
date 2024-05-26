import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import path from 'path';
import pkg from 'pg';
const { Pool } = pkg;

const app = express();
app.use(cors());


app.use("/public", express.static("public"))
app.use(bodyParser.json())
const pool = new Pool({
    connectionString: "postgres://default:nKerCRdD90FG@ep-royal-smoke-a4s4ttlf.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
})

const __dirname = path.dirname(new URL(import.meta.url).pathname);


pool.connect().then(()=>{
    console.log('connected postgre');
})
app.post("/login",async(req,res)=>{
    try{
        const{email,pwd}=req.body;
        const result=await pool.query(`SELECT * FROM user_hoolondoo WHERE user_name=$1 usr_pwd=$2`,[email,pwd] );
        const user=result.rows[0];
        if(!user||pwd!==user.user_pwd){
            return res.status(400).json({message:"fail"});
 }
        res.json({user_id:user.user_id});

    }catch(error){
        console.error("ERROR",error);
        res.status(500).json({error:"Internal server error"});
    }
})
app.get("/recipe", async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM food_recipes`);
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send('Internal Server Error');
    }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log("listening on ", {PORT})
})