import express from "express";
import { listOfUsers, loginUser, registerUser, deleteUser }  ;

const router = express.Router();

router.get("/users", listOfUsers);

router.post("/login", loginUser);

router.post("/register", registerUser);

router.delete("/delete/:id", deleteUser);

export default router;