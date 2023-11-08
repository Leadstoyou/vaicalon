import express from "express";
import { systemSettingController } from "../controller/indexController.js";

const router = express.Router();

router.post("/semester/create", systemSettingController.createNewSemester);

router.post("/userRole/create", systemSettingController.createNewUserRole);

router.get("/semester",systemSettingController.getAllSemester)

export default router;
