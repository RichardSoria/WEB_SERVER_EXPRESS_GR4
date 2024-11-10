import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, '../../db.json');

const memberModel = {
    async getAllMembersModel() {
        try {
            const data = fs.readFileSync(filePath, 'utf-8');
            const members = JSON.parse(data).members;
            return members;
        } catch (error) {
            console.log(error);
            throw new Error('Error al leer la base de datos');
        }
    },
    async getMemberByIdModel(id) {
        try {
            const data = fs.readFileSync(filePath, 'utf-8');
            const members = JSON.parse(data).members;
            const member = members.find(m => m.id === id);
            return member;
        } catch (error) {
            console.log(error);
            throw new Error('Error al leer la base de datos');
        }
    }
};

export default memberModel;