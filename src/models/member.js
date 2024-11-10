const API_URL = process.env.API_URL || 'http://localhost:4000';

const memberModel = {
    async getAllMembersModel() {
        try {
            const peticion = await fetch(`${API_URL}/members`);
            const members = await peticion.json();
            return members;
        } catch (error) {
            console.log(error);
        }
    },
    async getMemberByIdModel(id) {
        try {
            const peticion = await fetch(`${API_URL}/members/${id}`);
            const member = await peticion.json();
            return member;
        } catch (error) {
            console.log(error);
        }
    }
}

export default memberModel;