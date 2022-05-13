import { Router } from "express";
import { 
    createHotel,
    updateHotel,
    removeHotel,
    getHotel,
    getHotels,
} from "../controllers/hotel.js";

const router = Router();

//CREATE
router.post('/', createHotel)
//UPDATE
router.put('/:id', updateHotel)
//DELETE
router.delete('/:id', removeHotel)
//GET
router.get("/find/:id", getHotel);
//GETALL
router.get('/', getHotels)

export default router;