import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://chaitkaniz:Shihab123045@cluster-ecommerz.p66hqud.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-ecommerz').then(()=>console.log("Database Connected"));
}


//mongodb+srv://sabatanvir2019:Shihab123045@cluster0.lukdc7f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0





//mongodb+srv://chaitkaniz:Shihab123045@cluster-ecommerz.p66hqud.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-ecommerz