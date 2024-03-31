import { Inject, Injectable, InternalServerErrorException } from "@nestjs/common";
import { IProductRepository } from "./product.interface";
import { CreateProductDto } from "../dto/create-product.dto";
import { dynamoDB } from "src/common/database/dynamoDb";
import {v4 as uuidv4} from 'uuid';
@Injectable()
export class ProductRepository implements IProductRepository {
    private readonly tableName:string = "ProductsTable";
    findAll(): Promise<any> {
        try {
            return dynamoDB.scan({
                TableName: this.tableName,
            }).promise();
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }
    create(createProductDto: CreateProductDto): Promise<any> {
        try {
            return dynamoDB.put({
                TableName: this.tableName,
                Item:{
                    ...createProductDto,
                    id: uuidv4()
                }
            }).promise();
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }
    findById(id:string): Promise<any> {
        try {
            return dynamoDB.get({
                TableName: this.tableName,
                Key:{
                    productsId: id
                }
            }).promise()
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }
    deleteById(id:string): Promise<any> {
        try {
            return dynamoDB.delete({
                TableName: this.tableName,
                Key:{
                    productsId: id
                }
            }).promise();
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

}