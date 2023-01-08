import OPENAI from "../OpenAI";

const postController=async(req,res)=>{
    const text=req.body;

    try {
        const response = await OPENAI.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            max_tokens:3000,
            temperature:0.5,
          })

          const gptdata=await response.data.choices[0].text;

          res.status(200).json({
            success:true,
            data:gptdata
          })

    } catch (error) {
        res.status().json({
            success:false,
            error:"There was a server side problems"
        })
    }
}

export default postController;