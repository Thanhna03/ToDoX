import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);

    console.log("lien ket database thanh cong")
    }catch (error) {
        console.error("loi khi ket noi database: ", error)
        process.exit(1);
    }
};