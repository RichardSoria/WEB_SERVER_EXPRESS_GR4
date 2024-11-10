import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../../db.json');
const isDevelopment = process.env.NODE_ENV === 'development';

const memberModel = {
    async getAllMembersModel() {
        if (isDevelopment) {
            try {
                const response = await fetch('http://localhost:4000/members');
                const members = await response.json();
                return members;
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const data = fs.readFileSync(filePath, 'utf-8');
                const members = JSON.parse(data).members;
                return members;
            } catch (error) {
                console.log(error);
                throw new Error('Error al leer la base de datos');
            }
        }
    },
    async getMemberByIdModel(id) {
        if (isDevelopment) {
            try {
                const response = await fetch(`http://localhost:4000/members/${id}`);
                const member = await response.json();
                return member;
            } catch (error) {
                console.log(error);
            }
        } else {
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
    }
};

export default memberModel;