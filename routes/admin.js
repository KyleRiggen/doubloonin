import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';

const adminRouter = express.Router();
const matches = [];
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

adminRouter.get('/add-match', (req, res, next) => {
    res.render('add-match', {
        pageTitle: 'Add Match',
        path: '/admin/add-match'
    });
});

adminRouter.post('/add-match', (req, res, next) => {
    matches.push({ title: req.body.title });
    console.log(req.body);
    res.redirect('/');
});

// // /admin/add-product => GET
// router.get('/add-product', (req, res, next) => {
//     res.render('add-product', {
//       pageTitle: 'Add Product',
//       path: '/admin/add-product',
//       formsCSS: true,
//       productCSS: true,
//       activeAddProduct: true
//     });
//   });
  
//   // /admin/add-product => POST
//   router.post('/add-product', (req, res, next) => {
//     products.push({ title: req.body.title });
//     res.redirect('/');
//   });


// export default adminRouter;
export { adminRouter, matches };
