import Match from "../models/match.js";

const getAddMatch = (req, res, next) => {
    res.render('admin/add-match', {
        pageTitle: 'Add Match',
        path: '/admin/add-match'
    });
};

const postAddMatch = (req, res, next) => {
    const match = new Match(req.body.title);
    match.save();
    res.redirect('/');
};

const getMatches = (req, res, next) => {
    Match.fetchAll((matches) => {
        res.render('home/home', {
            mtchs: matches,
            pageTitle: 'Home',
            path: '/'
        });
    });
};

export { getAddMatch, postAddMatch, getMatches };