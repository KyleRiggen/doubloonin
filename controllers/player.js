// import Player from "../models/player.js";
import playerAPI from "../models/player.js";

// const getPlayer = (req, res, next) => {
//     Player.fetchAll((p) => {
//         res.render('home/onePlayer', {
//             player: p,
//             pageTitle: 'One Player from the model',
//             path: '/player'
//         });
//         console.log('inside the controller: ', p);
//     });
// };

// const getPlayer = (req, res, next) => {
//     playerAPI((p) => {
//         res.render('home/onePlayer', {
//             player: p,
//             pageTitle: 'One Player from the model',
//             path: '/player'
//         })
//     }
//     )
// }

const getPlayer = (req, res, next) => {
    playerAPI()
        .then(data => {
            res.render('home/onePlayer', {
                player: data,
                pageTitle: 'One Player from the model',
                path: '/player'
            })
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


export { getPlayer };