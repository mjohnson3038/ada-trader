import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

var QuoteView = Backbone.View.extend({
  initialize: function(options) {
    this.stock = options.stock;
    this.template = options.template;
  },

  render: function() {
    var html = this.template(this.stock);
    this.$el.html($(html));

    // Enable chained calls
    return this;
  },
  events: {
    'click .btn-sell': 'sellStock',
    'click .btn-buy': 'buyStock'
  },
  sellStock: function(event){
    console.log("stock is sold");
    console.log(this.stock.symbol);
    console.log(this.stock.price);
    this.stock.price -= 1;
    console.log(this.stock.price);
    this.render();
  },
  buyStock: function(event){
    console.log("stock is bought");
    console.log(this.stock.symbol);
    console.log(this.stock.price);
    this.stock.price += 1;
    console.log(this.stock.price);
    this.render();
  }
});

export default QuoteView;
