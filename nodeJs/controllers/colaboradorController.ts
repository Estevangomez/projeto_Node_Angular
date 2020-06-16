import { Request, Response } from 'express';
//import * as HttpStatus from "http-status";
var HttpStatus = require('http-status-codes');
import ColaboradorService from "../services/ColaboradorService";
import Helper from '../utils/Helper';


class ColaboradorController{

    async get(req: Request, res:Response){

        await ColaboradorService.all()
        .then(colaborador => Helper.sendResponse(res, HttpStatus.OK, colaborador))
        .catch(error => Helper.sendResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, error));

    }

    async getById(req: Request, res:Response){
        
        const _id = req.params.id;
               
        await ColaboradorService.findById(_id)
        .then(colaborador => Helper.sendResponse(res, HttpStatus.OK, colaborador))
        .catch(error => Helper.sendResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, error));
        
    }

    async create(req: Request, res:Response){
              
        await ColaboradorService.inserir(req.body)
        .then(colaborador => Helper.sendResponse(res, HttpStatus.OK, colaborador))
        .catch(error => Helper.sendResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, error));
    }

    async update(req: Request, res:Response){
        const idcolaborador = req.params.id;
        await ColaboradorService.update(req.body,idcolaborador)
        .then(colaborador => Helper.sendResponse(res, HttpStatus.OK, colaborador))
        .catch(error => Helper.sendResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, error));
    }

    async delete(req: Request, res:Response){
        const _id = req.params.id;
        await ColaboradorService.delete(_id)
        .then(colaborador => Helper.sendResponse(res, HttpStatus.OK, colaborador))
        .catch(error => Helper.sendResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, error));
    }
/*******************************CARGO********************************************** */
    async getAllCargo(req: Request, res:Response){
       
        await ColaboradorService.getAllCargo()
        .then(cargo => Helper.sendResponse(res, HttpStatus.OK, cargo))
        .catch(error => Helper.sendResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, error));
    }

    async createNewCargo(req: Request, res:Response){
              
        await ColaboradorService.inserirNewCargo(req.body)
        .then(cargo => Helper.sendResponse(res, HttpStatus.OK, cargo))
        .catch(error => Helper.sendResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, error));
    }

    async getBeanCargo(req: Request, res:Response){
        const _id = req.params.id;
        await ColaboradorService.getBeanCargo(_id)
        .then(cargo => Helper.sendResponse(res, HttpStatus.OK, cargo))
        .catch(error => Helper.sendResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, error));
    }


}

export default new ColaboradorController();