import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://bcotyeuuntxdoidxhoqw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjb3R5ZXV1bnR4ZG9pZHhob3F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM4MzY5MDUsImV4cCI6MTk3OTQxMjkwNX0.zdnrhP3I3kVXS92Uj_4N9BTDz9Gp3qdfISW6LrQU2uw')

export async function getWordsFromSupabase(){
    const { data, error } = await supabase.from('vrijdag').select('*')
    if(error) console.error('query error', error);
    else return data
}

export async function writeWordsToSupabase(newData){
    const { data, error } = await supabase.from('vrijdag').insert(newData)
      if(error) console.error('query error', error);
    else return data
}
