import Backbone from 'backbone';
import Player from 'player';
import PlayerView from 'app/views/player_view';
import GameView from 'app/views/game_view';

const Game = Backbone.Model.extend({
  defaults: {
    totalScore: 0
  },
  initialize: function(options) {
    this.game = new Game();
    const Player1 = new Player();
    Player1.mark = "X";
    Player1.turn = true;

    const Player2 = new Player();
    Player2.mark = "O";
  }
  });


  export default Game;
