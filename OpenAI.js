import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const OPENAI = new OpenAIApi(configuration);

export default OPENAI;