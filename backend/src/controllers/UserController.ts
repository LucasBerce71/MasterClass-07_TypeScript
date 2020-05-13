import { Request, Response } from 'express';

import EmailService from '../services/EmailService';

const users = [
    { name: 'Lucas', email: 'lucasberce71@gmail.com.br' },
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: {
                name: 'Lucas Bercê de Jesus',
                email: 'lucasberce71@gmail.com'
            },

            message: {
                subject: 'Seja bem-vindo ao sistema',
                body: 'Seja bem-vindo', attachment: ['Anexo 1', 'Anexo 2']
            }
        });

        return res.send();
    }
};