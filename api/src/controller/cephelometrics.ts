import express, { Request, Response } from "express";
import cephLogicHandler from "../data/cephLogicHandler";

const app = express.Router();

app.get("/hello", (req, res) => {
    res.send({"message" : "Hello World"})
})
app.get("/all-xrays", async (req:Request, res:Response) => {
    console.log("Reached this endpoint")
    const all_xrays = await cephLogicHandler.listAllImages();
    res.send({"all_xrays" : all_xrays})
})

app.post("/uploadData", async (req:Request, res: Response) => {
    const payloadData = req.body;
    const message = await cephLogicHandler.uploadData(payloadData);
    res.send(message);
})

app.post("/uploadCephData", async(req: Request, res : Response) => {
    const payloadData = req.body;
    const message = await cephLogicHandler.uploadCephData(payloadData);
    res.send(message);
    
});

app.post("/getCephInner", async(req: Request, res: Response) => {
    const id = req.body;
    const message = await cephLogicHandler.getCephData(id.id);
    res.send(message);
})



export default app;