import { Router } from "express";
import { addProduct, deleteProduct, editProduct, getAllProducts, getProduct } from "../controllers/productController";

const router = Router();

router.post('/',addProduct);
router.get('/',getAllProducts);
router.get('/:id',getProduct);
router.patch('/:id',editProduct);
router.delete('/:id',deleteProduct);

export default router;