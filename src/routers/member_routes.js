import { Router } from "express";
import {getAllMembersControl, getMemberByIdControl} from "../controllers/member_control.js";
const router = Router()

router.get('/',getAllMembersControl) // Responde a /integrantes
router.get('/:id',getMemberByIdControl) // Responde a /integrantes/:id

export default router