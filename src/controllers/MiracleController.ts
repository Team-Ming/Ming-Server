import util from '../modules/util';
import message from '../modules/responseMessage';
import statusCode from '../modules/statusCode';
import { Request, Response } from 'express';
import { MiracleCreateDto } from '../interfaces/miracle/MiracleCreateDto';
import { MiracleService } from '../services';

/**
 *  @route POST /miracle
 *  @desc Create miracle
 *  @access Public
 */
const createMiracle = async (req: Request, res: Response) => {
  const miracleCreateDto: MiracleCreateDto = req.body;

  try {
    const data = await MiracleService.createMiracle(miracleCreateDto);

    res
      .status(statusCode.CREATED)
      .send(
        util.success(statusCode.CREATED, message.CREATE_MIRACLE_SUCCESS, data)
      );
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }
};

export default { createMiracle };
