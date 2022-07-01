import express,{Application,Request,Response} from 'express';

const app:Application = express();

const port:number=4000;
app.get('/', (req:Request, res:Response) => {
    res.send('Express + TypeScript Serves');
  });
//   app.post('/post', (req:Request, res:Response) => {
//     console.log('req',req);
//     res.send('Express + TypeScript Serves');
//   });


app.listen(port,()=>{
    console.log(`[server]: Server is running at https://localhost:${port}`);
})