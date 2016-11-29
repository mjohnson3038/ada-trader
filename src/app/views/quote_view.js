import Backbone from 'backbone';

var QuoteView = Backbone.View.extend({
  initialize: function(options) {
    this.stock = options.stock;
    this.template = options.template;
  },

  render: function() {
    var html = this.template({html: this.stock});
    // var html = '<li class="single-quote">';
    // html += '<h2>' + this.stock.symbol + '</h2>';
    // html += '<p>' + this.stock.price + '</p>';
    // html += '</li>';
    this.$el.html($(html));

    // Enable chained calls
    return this;
  }
});

export default QuoteView;
