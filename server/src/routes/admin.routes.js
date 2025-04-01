import { Router } from "express";
import { registerAdminPage } from "../controllers/admin.controller.js";
const router = Router();

router.route("/register/admin").post(registerAdminPage);

export default router;
