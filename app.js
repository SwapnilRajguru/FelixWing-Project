const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dbURL = "mongodb://0.0.0.0:27017/project" ;
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(express.json());
app.use(cors());


mongoose.connect(dbURL, {

    useNewUrlParser: true,
    useUnifiedTopology: true,

  })
  .then(() => console.log("Connected to database.."))
  .catch((err) => console.log(err));


//NEW REGISTRATION SCHEMA

const registerSchema = {
  name: { type: String, required: true , unique:true},
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  password: { type: String, required: true },
};

const registerModel = mongoose.model("register", registerSchema);

app.post("/register", async (req, res) => {

  const { name, email, mobile, password } = req.body;

  const userData = new registerModel({
    
    name: name,
    email: email,
    mobile: mobile,
    password: password

  });


  const hashPassword = await bcrypt.hash(req.body.password, 10);

  userData.password = hashPassword;
  try {
      const result = await userData.save();;
        if (result) {
        return res.json({ data: "User register successfully" });
        }
    } 
    catch (err) {
        return res.json({ data: "Name alredy exists" });
    }
});



//Login function

const sercretKey = "ddmmyyyyhhmmss" ;

app.post('/login' , async (req,res)=>{ 
 
    const {email,password} = req.body  


    const getUser = await registerModel.findOne({email : email}) 
    try{
        if(getUser !== null){

            const checkPassword = await bcrypt.compare(password , getUser.password); 
            
            if(checkPassword){

                const authToken = await jwt.sign({email : getUser.email}, sercretKey, {expiresIn: '28d'}) 

                return res.json({data : "You are successfully Logged in " , authToken : authToken, username: getUser.name })  
                
            }
            else{

                return res.json({data : 'Entered Password is incorrect'})

            }
        } 
        else{

            return res.json({data : "You are not registered user...Kindly register first !!"})

        }
    } catch (error ){
        console.log(error);
        return res.json(error);
        }


})



//verify token

const verifyToken = (req,res, next)=>{ 
  const head = req.headers['authorization'].split(' ')[1]
  // console.log("testing",head);
  if(!head){
    
    return res.json("token is required")
  }
  else{
    try{
      const decode = jwt.verify(head, sercretKey);
      // console.log(head,sercretKey);
      return next();
    }
    catch(e){
      console.log('here');
      console.log(e);
      return res.json("token invalid")
    }
  }

  console.log(head)
}



const contactUsSchema = {
    name: { type: String},
    email: { type: String},
    message: { type: String}
  };
  
  const contactUsModel = mongoose.model("contactUs", contactUsSchema);
  
  app.post("/contactUs", async (req, res) => {
  
    const { name, email, message } = req.body;
  
    const contactUsData = new contactUsModel({
      
      name: name,
      email: email,
      message: message
  
    });
  
    try {
        const result = await contactUsData.save();;
          if (result) {
          return res.json({ data: "Contact Us form submitted successfully" });
          }
      } 
      catch (err) {
          return res.json(err);
      }
  });
// //create post function

// const postSchema = {
//   title: { type: String, required: true },
//   content: { type: String, required: true },
//   name: { type: String, required: true }
  
// };

// const postModel = mongoose.model("post", postSchema);

// app.post('/createpost',verifyToken, async(req,res)=>{ 

//   const{title, content, name} = req.body 
//   const postData = new postModel({
//       title : title ,
//       content : content,
//       name: name
      
//   }) 

//   try{ 

//     await postData.save() 

//     res.send({data : "Post saved successfully !!"})

//   } 
//   catch(err){

//       res.send({data : "error"})
//   }
// })




// //Get post function
// app.get('/getpost', async(req,res)=>{

//   const username = req.query.path;
//   try{
//     const getpost = await postModel.find({name : username})
//     // const getpost = 

//     return res.json({data: getpost})

//   }
//   catch(err){

//     return res.json({data:"error"})

//   }
// })

// app.delete('/deletepost', async(req,res)=>{
// console.log(req.body);
//   const{postId} = req.body

//   //const post_id = req.body
//   try{
//     const deletepost = await postModel.findOne({postId : postId})
//     deletepost.delete(postId)
//     console.log("deleted")
//   }
//   catch(error){
//     return res.json({data:"error"})

//   }
// })




//PORT
const port = process.env.PORT || 3400;
app.listen(port, () => {
  console.log("listening on port %s...", port);
});