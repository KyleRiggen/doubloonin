const getAddMatch = (req, res, next) => {
    res.render('add-match', {
        pageTitle: 'Add Match',
        path: '/admin/add-match'
    });
};

export { getAddMatch };