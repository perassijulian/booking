import { Router } from "express";

const router = Router();

router.get('/', (req, res, next) => {
    res.send("Rooms")
});

export default router;