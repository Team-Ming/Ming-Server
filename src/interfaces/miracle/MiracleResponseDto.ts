import mongoose from 'mongoose';

export interface MiracleResponseDto {
  writer: mongoose.Schema.Types.ObjectId;
  content: String[];
  createdAt: Date;
  updatedAt: Date;
}
