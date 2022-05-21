import util from '../modules/util';
import message from '../modules/responseMessage';
import statusCode from '../modules/statusCode';
import express, { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { MiracleCreateDto } from '../interfaces/miracle/MiracleCreateDto';
import { MiracleService } from '../services';

/**
 * @route GET /miracle?date
 * @desc Get Miracle
 * @access Public
 */
const getMiracle = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    console.log(error);
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }

  const { user_id, _date } = req.params;
  console.log(_date);

  try {
    const data = await MiracleService.getMiracle(user_id, _date);
    if (!data) {
      return res
        .status(statusCode.NOT_FOUND)
        .json(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
    }
    res
      .status(statusCode.OK)
      .send(
        util.success(statusCode.OK, message.READ_TODAY_MIRACLE_SUCCESS, data)
      );
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

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

/**
 *  @route GET /miracle/all
 *  @desc get all miracle
 *  @access Public
 */
const getAllMiracles = async (req: Request, res: Response) => {
  try {
    const data = await MiracleService.getAllMiracles();

    res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, message.GET_ALL_MIRACLE_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }
};

export default { createMiracle, getAllMiracles, getMiracle };
