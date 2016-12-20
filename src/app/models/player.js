import Backbone from 'backbone';
import Game from 'app/models/game';
import GameView from 'app/views/player_view';

const Player = Backbone.Model.extend({
  defaults: {
    turn: false,
    score: 0,
    name: 'A better player'
  },
  initialize: function(options) {
    this.player = new Player();
  }
});


export default Player;
