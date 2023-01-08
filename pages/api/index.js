import postcontroller from "../../controller/postcontroller";

export default function handler(req, res) {
  const method=req.method;

  if(method === 'POST'){
    postcontroller(req,res);
  }else{
    res.status(403).json({
      success:false,
      error:"Method not allow"
    })
  }
}
