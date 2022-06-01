import { FastifyInstance } from "fastify";
import { successResponce } from "../utils/buildDataResponse/buildResponse";

const generator = require('generate-password');

export interface IPassword {
    lengthPassword: string,
    numbers: boolean, 
    symbols: boolean, 
    lowercase: boolean, 
    uppercase: boolean, 
    excludeSimilarCharacters: boolean, 
    exclude: boolean, 
    strict: boolean 
}

const generatePassword = async(server: FastifyInstance) => {
    server.post<{ Body: any }>("/", async (request) => {
        const { 
            lengthPassword, 
            numbers, 
            lowercase, 
            uppercase, 
            excludeSimilarCharacters, 
            // symbols, 
            // exclude, 
            // strict 
        } = request.body;

        const password = generator.generateMultiple(8, {
            length: lengthPassword,
            numbers,
            lowercase,
            uppercase,
            excludeSimilarCharacters,
            symbols: true,
            // exclude,
            // strict
        });

        const passwods = password.map((p) => {
            return { password: p }
        });

        return successResponce(passwods);
    })
};

export default generatePassword;