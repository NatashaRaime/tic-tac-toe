const PlayerView = Backbone.View.extend({
  initialize: function(options){
    this.form = this.$('.player');
    this.input = {
      player: this.$('.player input[name="player"]'),
    };


    this.listenTo(this.model, 'btn-save', this.addPlayer);
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'exit', this.clearPlayers);
  },
  render: function(){
      this.$el.empty();
      this.playerTemplate = _.template($('#tmpl-players').html());
      this.players = [];
      this.model.forEach(function(newPlayer) {
        this.addPlayer(newPlayer);
      }, this);
    },


  events: {
  'click .btn-save': 'createPlayer',
  'click .btn-clear': 'clearPlayers',
},

  clearPlayer: function(player){
  this.players = [];
  },

  addPlayer: function(player) {
  var playerName = new PlayerView({
    model: player,
    el:this.$el,
    template: this.playerTemplate
  });
  this.players.push(playerName);
  this.render();
},

});
export default PlayerView;
