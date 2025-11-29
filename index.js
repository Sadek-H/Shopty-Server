// const dotenv = require("dotenv");
// dotenv.config();
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const axios = require("axios");
// const Stripe = require("stripe");
// const port = 3000;
// const multer = require("multer");
// const cloudinary = require('cloudinary').v2;
// const { CloudinaryStorage } = require('multer-storage-cloudinary');
// const stripe = Stripe(process.env.PAYMENT_KEY);
// //middleware
// app.use("/uploads", express.static("uploads"));
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// //vVjP1tYk44SLqd97

// //multer setup
// // const storage = multer.diskStorage({
// //   destination: (req,file,cb)=>{
// //     cb(null,'uploads/') //create uploads folder in root
// //   },
// //   filename: (req,file,cb)=>{
// //     cb(null,Date.now()+ "_" + file.originalname)
// //   }
// // })


// cloudinary.config({
//   cloud_name: 'dqajerl82',
//   api_key: '932913874974494',
//   api_secret: 'hYT179n0qZ8MlZnejJCz4_9xU1U'
// });

// // Configure CloudinaryStorage
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: '10OCT',  // Optional: Folder for uploaded files in Cloudinary
//     format: async(req, file) => 'png',  // Optional: Restrict allowed file types
//    public_id: (req, file) => Date.now() + '-' + file.originalname, // Use the original name as the public ID
//   }
// });

// const upload = multer({storage, limits:{fieldSize: 25 * 1024*1024}})

// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.t5n91s9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();

//     const userCollection = client.db("shopty").collection("users");
//     const productCollection = client.db("shopty").collection("products");
//     const vendorCollection = client.db("shopty").collection("vendors");
//     const riderCollection = client.db("shopty").collection("riders");
//     const reviewCollection = client.db("shopty").collection("reviews");
//     const paymentCollection = client.db("shopty").collection("payments");
//     const subcategoryCollection = client.db("shopty").collection("subcategories");
//     app.post("/register", async (req, res) => {
//       const data = req.body;
//       const result = await userCollection.insertOne(data);
//       res.send({ success: true, id: result.insertedId });
//     });

//     app.get("/users", async (req, res) => {
//       const result = await userCollection.find().toArray();
//       res.send(result);
//     });

//     // app.post("/upload", upload.array("image", 4), (req,res)=>{
//     //   console.log(req.files);
//     //   res.send(req.files)
//     // })
                                                                        
//     app.post("/products",upload.array("images", 4), async (req, res) => {
//       const data = req.body;
//       console.log(data)
//        const imagePaths = req.files.map((file) => file.path); 
     
//     const newProduct = {
//         ...data,
//         createdAt: new Date(),
//         isNewArrival: true,
//         images: imagePaths,
//       };
//       const result = await productCollection.insertOne(newProduct);
//       res.send(result);
//     });           

// app.get("/products", async (req, res) => {
//   const { subcategory, price,search, limit = 3, skip = 0 } = req.query;
//   const query = {};

//   const limitnum = Number(limit);
//   const skipnum = Number(skip);
//   if (search) {
//     query.$or = [
//       { name: { $regex: new RegExp(search, "i") } },
//       { category: { $regex: new RegExp(search, "i") } },
//     ];
//   }
 
//   if (subcategory) {
//     query.subcategory = { $regex: new RegExp(subcategory, "i") };
//   }

//   if(price){
//     if(price== "under50"){
//       query.price = {$lt:50}
//     }
//     else if(price=="50to200"){
//       query.price={ $gt:50, $lt:200}
//     }
//     else if(price=="above200"){
//        query.price={ $gt:200}
//     }
//   }
//   const totalcount = await productCollection.countDocuments(query);
// console.log(totalcount);
//   const result = await productCollection.find(query)
//     .skip(skipnum)
//     .limit(limitnum)
//     .toArray();

//   res.send({ totalcount, result });
// });



//     app.post("/subcategories", async (req, res) => {
//       const subcategory = req.body;
//       const result = await subcategoryCollection.insertOne(subcategory);
//       res.send(result);

//     });

//   app.get("/subcategories", async (req, res) => {
//   const result = await subcategoryCollection.findOne();
//     res.send(result);

//    });
//     app.get("/products/:id", async (req, res) => {
//       const id = req.params.id;
//       console.log(id);
//       const filter = { _id: new ObjectId(id) };
//       const result = await productCollection.findOne(filter);
//     //  console.log(result);
//       res.send(result);
//     });
//     app.post("/becomevendors", async (req, res) => {
//       const data = req.body;
//       const result = await vendorCollection.insertOne(data);
//       res.send(result);
//     });
//     app.post("/becomeRiders", async (req, res) => {
//       const data = req.body;
//       const result = await riderCollection.insertOne(data);
//       res.send(result);
//     });

//    app.post("/products/:id/reviews", async (req, res) => {
//   const id = req.params.id;
//   let data = req.body;

//   // ensure productId is set
//   data.productId = id;

//   // insert into db
//   const result = await reviewCollection.insertOne(data);

//   // fetch the inserted review (with _id and all fields)
//   const insertedReview = await reviewCollection.findOne({ _id: result.insertedId });

//   res.send(insertedReview);  // ✅ return full review object
// });

//     app.get("/products/:id/reviews", async (req, res) => {
//       const id = req.params.id;
//       const filter = { productId: id };
//       const result = await reviewCollection.find(filter).toArray();
//       console.log(result);
//       res.send(result);
//     });

//     app.delete("/reviews/:id", async (req, res) => {
//       const id = req.params.id;
//       const filter = { _id: new ObjectId(id) };
//       const result = await reviewCollection.deleteOne(filter);
//       res.send(result);
//     });

//     app.post("/create-payment-intent", async (req, res) => {
//       const {id} = req.body;
//       console.log(id);
//       const data = await productCollection.findOne({_id: new ObjectId(id)});
//       console.log(data.price);
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount: data.price * 100,
//         currency: "usd",
//         payment_method_types: ["card"],
//       });
//      // console.log(paymentIntent);
    
//       res.send({ clientSecret: paymentIntent.client_secret });
//     });
//     app.post("/payments",async(req,res)=>{
//        const data = req.body;
//       const paymentData = {
//         ...data,
//         status: "success",
//       }
//        const result = await paymentCollection.insertOne(paymentData);

//        res.send(result);
//     })

//     app.post("/payment/initiate", async (req, res) => {
//       const data = req.body;
//       //  console.log(data);
//       const product = await productCollection.findOne({
//         _id: new ObjectId(data.transactionId),
//       });
//       //  console.log("Payment amount:", product);

//       await paymentCollection.insertOne({ ...data, amount: product.price });
//       const initiate = {
//         store_id: "ship68bad56381b28",
//         store_passwd: "ship68bad56381b28@ssl",
//         total_amount: product.price,
//         currency: "BDT",
//         tran_id: data.transactionId,
//         success_url: "http://localhost:3000/success-payment",
//         fail_url: "http://localhost:3000/fail",
//         cancel_url: "http://localhost:3000/cancel",
//         ipn_url: "http://localhost:3000/ipn",
//         shipping_method: "Courier",
//         product_name: "Computer.",
//         product_category: "Electronic",
//         product_profile: "general",
//         cus_name: "Customer Name",
//         cus_email: "customer@example.com",
//         cus_add1: "Dhaka",
//         cus_add2: "Dhaka",
//         cus_city: "Dhaka",
//         cus_state: "Dhaka",
//         cus_postcode: "1000",
//         cus_country: "Bangladesh",
//         cus_phone: "01711111111",
//         cus_fax: "01711111111",
//         ship_name: "Customer Name",
//         ship_add1: "Dhaka",
//         ship_add2: "Dhaka",
//         ship_city: "Dhaka",
//         ship_state: "Dhaka",
//         ship_postcode: 1000,
//         ship_country: "Bangladesh",
//       };

//       const initiateResponse = await axios({
//         url: "https://sandbox.sslcommerz.com/gwprocess/v4/api.php",
//         method: "POST",
//         data: initiate,
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//       });
//       const gateurl = initiateResponse?.data?.GatewayPageURL;

//       res.send({ gateurl });
//     });
//     app.post("/success-payment", async (req, res) => {
//       const data = req.body;
//     //    console.log( data,"Payment successful:");
//       const isValidpayment = await axios.get(
//         `https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php?val_id=${data.val_id}&store_id=ship68bad56381b28&store_passwd=ship68bad56381b28@ssl&format=json`
//       );
//       console.log("Payment validation response:", isValidpayment);
//       if (isValidpayment.data.status !== "VALID") {
//         return res.status(400).send("Invalid payment");
//       }
//       //update payment status
//       const updatePayment = await paymentCollection.updateOne(
//         { transactionId: data.tran_id },
//         { $set: { status: "success" } }
//       );

//         console.log("Payment record updated:", updatePayment);
//       res.redirect("http://localhost:5173/success");
//     });

    

//     //   const result = await userCollection.insertOne({ name: "John Doe", email: "john@example.com" });
//     //   console.log(`New user created with the following id: ${result.insertedId}`);

//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const port = 3000;
dotenv.config();
//const userRoutes = require("./routes/userroutes");
const products = require("./routes/productroutes");
const subcategory = require ("./routes/Subcategory");
const register = require ("./routes/userroutes");
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//db connect
const connectDB = require("./Config/db");
connectDB();
// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.t5n91s9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
// .then(()=>{
//     console.log("mongodb connected");
// })
// .catch((error)=>{
//     console.log("mongodb connectioin error");
// })

//routes
//app.use("/api/userroutes", userRoutes);
app.use("/",   products);
app.use("/", subcategory);
app.use("/", register);

app.get("/", (req,res)=>{
    res.send("Shopty server is running");
})

app.listen(port, ()=>{
    console.log(`Shopty server is running on port ${port}`);
})