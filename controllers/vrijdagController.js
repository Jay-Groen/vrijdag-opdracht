import { getWordsFromSupabase } from "../adaptor/supabaseAdaptor.js";
import bodyParser from "body-parser";

const jsonParser = bodyParser.json()

export async function getWords(req, res, next){
    console.log('teagay, can we get much higher');
    const vrijdag = await getWordsFromSupabase();
    res.json(vrijdag);
}

export async function setWord(req, res, next){
    vrijdagRouter.post("/", jsonParser, async (req, res, next) => {
        const newData = await supabase.from('vrijdag').insert(
            req.body
        )
        res.json({"data": newData})
    })
}