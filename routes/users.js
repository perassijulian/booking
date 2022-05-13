import { Router } from "express";
import { 
    updateUser,
    removeUser,
    getUser,
    getUsers,
} from "../controllers/user.js";
import { 
    verifyUser,
    verifyAdmin,
} from "../utils/verifyToken.js";

const router = Router();

//UPDATE
router.put('/:id', verifyUser, updateUser)
//DELETE
router.delete('/:id', verifyUser, removeUser)
//GET
router.get("/find/:id", verifyUser, getUser);
//GETALL
router.get('/', verifyAdmin, getUsers)

export default router;