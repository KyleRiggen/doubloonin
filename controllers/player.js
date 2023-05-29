import Player from "../models/player.js";

const getPlayer = (req, res, next) => {
    Player.fetchAll((p) => {
        res.render('home/onePlayer', {
            player: p,
            pageTitle: 'One Player from the model',
            path: '/player'
        });
    });
};

// const getMatches = (req, res, next) => {
//     Match.fetchAll((matches) => {
//         res.render('home/home', {
//             mtchs: matches,
//             pageTitle: 'Home',
//             path: '/'
//         });
//     });
// };

export { getPlayer };