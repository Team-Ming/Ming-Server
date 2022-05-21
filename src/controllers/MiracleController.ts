import util from '../modules/util';
import message from '../modules/responseMessage';
import statusCode from '../modules/statusCode';
import express, { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { MiracleService } from '../services';

/**
 * @route GET /miracle?date
 * @desc Get Miracle
 * @access Public
 */
const getMiracle = async (req: Request, res: Response) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        console.log(error);
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }

    const {user_id,_date} = req.params;
    
    try{
        const data = await MiracleService.getMiracle(user_id, _date);
        res.status(statusCode.OK).send(util.success(statusCode.OK,message.READ_TODAY_MIRACLE_SUCCESS,data));


    }catch(error){
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).json(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR)); 
   }
    
}
export default {
    getMiracle
};
