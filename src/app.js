import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import QuoteView from 'app/views/quote_view';
import ApplicationView from 'app/views/application_view.js';

const simulate = function(quote) {
  // Calculate a random price movement
  const maxChange = 1.00;
  const minChange = 0.00;
  var change = _.random(minChange * 10, maxChange * 10) / 10;

  // Decide if the change is positive or negative
  if(_.random(0,1) === 1) {
    change *= -1;
  }

  // Actually trigger the change
  quote.trigger('change:price', change);
};

var stockData = [
  {
    symbol: "Humor",
    price: 88.50
  }, {
    symbol: "Cloth",
    price: 81.70
  }, {
    symbol: "Habit",
    price: 98.00
  }, {
    symbol: "Super",
    price: 83.10
  }, {
    symbol: "Ingrd",
    price: 79.40
  }, {
    symbol: "Mxtpe",
    price: 109.20
  }, {
    symbol: "Cntar",
    price: 90.70
  }, {
    symbol: "Evclr",
    price: 101.90
  }, {
    symbol: "Fuzzy",
    price: 88.60
  }
];

// var QuoteView = Backbone.View.extend({
//   initialize: function(options) {
//     this.stock = options.stock;
//     this.template = options.template;
//   },
//
//   render: function() {
//     var html = this.template(this.stock);
//     this.$el.html($(html));
//
//     // Enable chained calls
//     return this;
//   }
// });

// var ApplicationView = Backbone.View.extend({
//   initialize: function(options) {
//     this.stockData = options.stockData;
//     this.quoteTemplate = _.template($('#tmpl-quote-view').html());
//     this.listElement = this.$('.quotes ');
//     this.stockList = [];
//     this.stockData.forEach(function(quotePrice){
//       var item = new QuoteView({
//         stock: quotePrice,
//         template: this.quoteTemplate
//       });
//       this.stockList.push(item);
//     }, this); // bind `this` so it's available inside forEach
//   },
//   render: function() {
//     this.listElement.empty();
//     this.stockList.forEach(function(item){
//       item.render();
//
//       this.listElement.append(item.$el);
//     }, this);
//     return this; // enable chained calls
//   }
// });

$(document).ready(function() {
  var application = new ApplicationView({
    el: $('#application'),
    stockData: stockData
  });
  application.render();
});

// $(document).ready(function() {
//   var quoteTemplate = _.template($('#tmpl-quote-view').html());
//   var stockQuoteElement = $('.quotes');
//   var stockList = [];
//   stockData.forEach(function(quotePrice){
//     var item = new QuoteView({
//       stock: quotePrice,
//       template: quoteTemplate
//     });
//     stockList.push(item);
//     stockQuoteElement.append(item.render().$el);
//   });
// });
