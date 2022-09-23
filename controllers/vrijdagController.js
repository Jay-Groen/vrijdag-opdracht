import { getWordsFromSupabase, writeWordsToSupabase } from "../adaptor/supabaseAdaptor.js";
import bodyParser from "body-parser";
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://bcotyeuuntxdoidxhoqw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjb3R5ZXV1bnR4ZG9pZHhob3F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM4MzY5MDUsImV4cCI6MTk3OTQxMjkwNX0.zdnrhP3I3kVXS92Uj_4N9BTDz9Gp3qdfISW6LrQU2uw')

const jsonParser = bodyParser.json()

export async function getWords(req, res, next){
    console.log('teagay, can we get much higher');
    const vrijdag = await getWordsFromSupabase();
    res.json(vrijdag);
}

export async function setWord(req, res, next){
    console.log('teaCringe');
    const vrijdag = await writeWordsToSupabase(req.body);
    res.json(vrijdag);
}