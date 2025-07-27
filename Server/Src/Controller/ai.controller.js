import express from "express";
import generateContent from "../Service/ai.service.js"; 

export const codereviewer = async (req , res)=> {
    const prompt = req.body.prompt;
    if(!prompt) return res.status(400).json({message:"prompt is required"});
    else{
        try{
            const airesponse = await generateContent(prompt);
            res.send(airesponse) ;
        }
        catch(error){
            res.status(500).json({message:"Internal server error"});
        }
    }
}