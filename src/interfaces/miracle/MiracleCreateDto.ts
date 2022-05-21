import mongoose from 'mongoose';

export interface MiracleCreateDto {
  writer: mongoose.Schema.Types.ObjectId;
  content: String[];
}
