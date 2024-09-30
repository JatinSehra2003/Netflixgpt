//import OpenAI from 'openai';
import { GROQ_API_KEY } from './constants';
import Groq from "groq-sdk";

const client  = new Groq({ 
    apiKey:GROQ_API_KEY,
    dangerouslyAllowBrowser: true,
});

export default client;