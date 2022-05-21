import mongoose from 'mongoose';

export interface MiracleResponseDto {
    userId: mongoose.Schema.Types.ObjectId,
    content: String[];
}