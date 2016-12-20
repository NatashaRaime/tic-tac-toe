import Game from 'app/collections/game';


const Player = Backbone.Model.extend({
  defaults: {
    plays: 0,
    turn: false,
    score: 0,
    mark: 'Xo',
    name: 'A better player'
  },
  initialize: function(options) {
    this.player = new Player();
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

      //this could be useful for an automated player later
      shuffle: function(){
        for (let index = this.possiblePlays.length; index; index--){
          let j = Math.floor(Math.random() * index);
          [this.possiblePlays[index - 1], this.possiblePlays[j]] = [this.possiblePlays[j], this.possiblePlays[index - 1]];
        }
        console.log(this.possiblePlays);
        return this.possiblePlays;
      }});


      export default Player;
