import express from "express";
import { addUser, deleteUser, editUser, getUserById, getUsers } from "../controller/user-controller.js";

const router = express.Router();

router.get('/', getUsers);
router.post('/add', addUser);
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

export default router;
