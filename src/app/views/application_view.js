import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import QuoteView from 'app/views/quote_view';

// const ApplicationView = Backbone.View.extend({
//   initialize: function() {
//   },
//
//   render: function() {
//     this.$el.html('<p>Hello World</p>');
//
//     return this;
//   }
// });

var ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    this.stockData = options.stockData;
    this.quoteTemplate = _.template($('#tmpl-quote-view').html());
    this.listElement = this.$('.quotes ');
    this.stockList = [];
    this.stockData.forEach(function(quotePrice){
      var item = new QuoteView({
        stock: quotePrice,
        template: this.quoteTemplate
      });
      this.stockList.push(item);
    }, this); // bind `this` so it's available inside forEach
  },
  render: function() {
    this.listElement.empty();
    this.stockList.forEach(function(item){
      item.render();

      this.listElement.append(item.$el);
    }, this);
    return this; // enable chained calls
  }
});



export default ApplicationView;
