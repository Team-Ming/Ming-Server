import { MiracleCreateDto } from '../interfaces/miracle/MiracleCreateDto';
import Miracle from '../models/miracle/Miracle';

const createMiracle = async (miracleCreateDto: MiracleCreateDto) => {
  try {
    const miracle = new Miracle({
      writer: miracleCreateDto.writer,
      content: miracleCreateDto.content,
    });

    await miracle.save();

    return miracle;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default { createMiracle };
