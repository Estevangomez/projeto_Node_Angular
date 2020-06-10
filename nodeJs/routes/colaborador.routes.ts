import { Router } from 'express';
import colaboradorController from '../controllers/colaboradorController';


const router = Router();

router.route('/colaborador')
    .get(colaboradorController.get)
    .post(colaboradorController.create);

router.route('/colaborador/:id').get(colaboradorController.getById);
router.route('/colaborador/:id').put(colaboradorController.update);
router.route('/colaborador/:id').delete(colaboradorController.delete);

export default router;