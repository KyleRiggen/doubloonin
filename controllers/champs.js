import Champion from "../models/champion.js";

const getAddChamp = (req, res, next) => {
    res.render('admin/add-champ', {
        pageTitle: 'Add Champion',
        path: '/admin/add-champion'
    });
};

const postAddChamp = (req, res, next) => {
    const champ = new Champion(req.body.name);
    champ.save();
    res.redirect('/champions');
};

const getChamps = (req, res, next) => {
    Champion.fetchAll((champs) => {
        res.render('home/champions', {
            champs: champs,
            pageTitle: 'Champions',
            path: '/champions'
        });
    });
};

export { getAddChamp, postAddChamp, getChamps };