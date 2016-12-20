import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Game from 'app/collections/game';
import PlayerView from 'app/views/player_view';
import Player from 'app/models/player';

const GameView = Backbone.View.extend({
  initialize: function(options){
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = "X";
    this.form = this.$('.form');
    this.input = {
      player1: this.$('.form input[name="player1"]'),
      player2: this.$('.form input[name="player2"]')
    };
    this.listenTo(this.model, 'play', this.playGame);
    this.listenTo(this.model, 'exit', this.render);
  },

  render: function() { },
  events: {
    'click .play': 'playGame',
    'click .exit': 'exitGame',
    'click #1': 'markBox',
    'click #2': 'markBox',
    'click #3': 'markBox',
    'click #4': 'markBox',
    'click #5': 'markBox',
    'click #6': 'markBox',
    'click #7': 'markBox',
    'click #8': 'markBox',
    'click #9': 'markBox',
  },
  win: function(){
    if(this.plays > 2){
      if (this.spaces[[0][0]] == this.mark && this.spaces[[1][1]]== this.mark && this.spaces[[2][2]] == this.mark || this.spaces[[2][0]] == this.mark && this.spaces[[1][1]] == this.mark && this.spaces[[0][2]] == this.mark)
      winMatch();
      this.score += 1;
    }
    for (let i = 0; i < 4; i++){
      if (this.spaces[[i][0]] == this.mark && this.spaces[[i][1]] == this.mark && this.spaces[[i][2]] == this.mark || this.spaces[[0][i]] == this.mark && this.spaces[[1][i]] == this.mark && this.spaces[[2][i]] == this.mark) {
        return true;
      }
      if(true){
        winMatch();
        this.score += 1;
      }}},

  turn: function() {
     if(this.currentPlayer == "X") {
       this.currentPlayer = "O";
     } else {
       this.currentPlayer = "X";
     }
   },

  getInput: function() {
  var players = {
    player1: this.input.player1.val(),
    player2: this.input.player2.val()
  };
  return players;
},

  clearInput: function(event) {
    this.input.player.val('');
  },

  markBox: function(event) {
      var div = $(this);
        if(div == '_') {
          div = this.currentPlayer;
          turn();
      } else {
        messages.html('This box is already checked.');
      }
    }
});



  export default GameView;
