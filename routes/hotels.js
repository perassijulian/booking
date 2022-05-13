import { Router } from "express";
import { 
    createHotel,
    updateHotel,
    removeHotel,
    getHotel,
    getHotels,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = Router();

//CREATE
router.post('/', verifyAdmin, createHotel)
//UPDATE
router.put('/:id', verifyAdmin, updateHotel)
//DELETE
router.delete('/:id', verifyAdmin, removeHotel)
//GET
router.get("/find/:id", getHotel);
//GETALL
router.get('/', getHotels)

export default router;