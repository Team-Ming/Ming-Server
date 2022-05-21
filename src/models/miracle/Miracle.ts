import mongoose from "mongoose";
import { MiracleInfo } from "../../interfaces/miracle/MiracleInfo";

const MiracleSchema = new mongoose.Schema({
    writer:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    content:[{
        type: String,
        required: true
    }]
}, { timestamps: true });

export default mongoose.model<MiracleInfo & mongoose.Document> ("Miracle",MiracleSchema);