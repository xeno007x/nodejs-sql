const express = require('express')
const router = express.Router()  //instence of this router



const games = [{
  id: 1,
  title: 'Mario'
},
{
  id: 2,
  title: 'Zelda'
},
{
  id: 3,
  title: 'Donkey Kong'
}
];
// middleware that is specific to this router

router.get('/', (req, res) => {
  res.send('Ima change thilnjfdbjknfbjnfznjvlsjkNVKDNVlksjdnvkljdfsnjlck vnlcfkS Vlkcfjdn voldkvjndforojenhgvfhvoruhnoueghoerujgriojferwajnigu;erhnvfiveiuvnouiervnruhggjopogrkmhhuihu;s up!');
});

// 1
// app.get('/api/games', (req, res) => {
//     res.send(['Mario', 'Zelda', 'Donkey Kong']);
// });

// 2   getting a single resource like game
// app.get('/api/games/:id', (req, res) => {
//     res.send(req.params.id);
// });

// 3
// app.get('/api/games/:title/:publisher', (req, res) => {
//     res.send(req.params);
// });

// 4
// app.get('/api/games/:title/:publisher', (req, res) => {
//     res.send([req.params, req.query]);
// });


// 5
// get all games
router.get('/api/games', (req, res) => {
  res.send(games);
});

// 6
// get game by id
router.get('/api/games/:id', (req, res) => {
  const game = games.find(g => g.id === parseInt(req.params.id));
  if (!game) return res.status(404).send('The game with the given ID was not found.');
  res.send(game);
});


// add a game
router.post('/api/games', (req, res) => {
  const schema = {
      title: Joi.string().min(2).required()  
      //validation
  };

  // const result = Joi.validate(req.body, schema);
  // if (result.error) {
  //     res.status(400).send(result.error)
  // }

  const game = {
      id: games.length + 1,
      title: req.body.title
  }
  games.push(game);
  res.send(game);
}); 

// update a game
router.put('/api/games/:id', (req, res) => {
  const game = games.find(g => g.id === parseInt(req.params.id));
  if (!game) return res.status(404).send('The game with the given ID was not found.');

  const schema = {
      title: Joi.string().min(2).required()
  };

  const result = Joi.validate(req.body, schema);
  if (result.error) {
      res.status(400).send(result.error)
  }

  game.title = req.body.title;
  res.send(game);
});

// delete a game
router.delete('/api/games/:id', (req, res) => {
  const game = games.find(g => g.id === parseInt(req.params.id));
  if (!game) return res.status(404).send('The game with the given ID was not found.');

  const index = games.indexOf(game);
  games.splice(index, 1);

  res.send(game);
});


module.exports = router;