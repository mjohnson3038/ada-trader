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
  }
});

export default QuoteView;
