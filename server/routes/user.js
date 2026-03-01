import { Router } from "express";
import { users } from "../controller/user.js";

const router = Router();

router.get("/user", users);

export default router;
