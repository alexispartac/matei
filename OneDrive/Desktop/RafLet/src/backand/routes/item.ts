import express from "express";
import { uploadImage, addDiscount, addItem } from '../api/item.ts';

const router = express.Router();

// adauga imagine
router.post("/upload", uploadImage);

// adauga discount
router.post("/addDiscount", addDiscount);

// adauga item
router.post("/addItem", addItem);


export default router;
