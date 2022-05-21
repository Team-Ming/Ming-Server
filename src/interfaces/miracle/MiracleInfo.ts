import mongoose from "mongoose";

export interface MiracleInfo {
    writer: mongoose.Schema.Types.ObjectId;
    date: string;
    content: string[];
}