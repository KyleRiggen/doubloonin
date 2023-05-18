import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

// module.exports = router;
export default router;
