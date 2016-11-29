import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

// import TaskView from 'app/views/quote_view.js';
// import ApplicationView from 'app/views/application_view.js';

// const simulate = function(quote) {
//   // Calculate a random price movement
//   const maxChange = 1.00;
//   const minChange = 0.00;
//   var change = _.random(minChange * 10, maxChange * 10) / 10;
//
//   // Decide if the change is positive or negative
//   if(_.random(0,1) === 1) {
//     change *= -1;
//   }
//
//   // Actually trigger the change
//   quote.trigger('change:price', change);
// };

var stockData = [
  {
    symbol: "Humor",
    price: 8850
  }, {
    symbol: "Cloth",
    price: 8170
  }, {
    symbol: "Habit",
    price: 9800
  }, {
    symbol: "Super",
    price: 8310
  }, {
    symbol: "Ingrd",
    price: 7940
  }, {
    symbol: "Mxtpe",
    price: 10920
  }, {
    symbol: "Cntar",
    price: 9070
  }, {
    symbol: "Evclr",
    price: 10190
  }, {
    symbol: "Fuzzy",
    price: 8860
  }
];

var QuoteView = Backbone.View.extend({
  initialize: function(options) {
    this.stock = options.stock;
    // this.template = options.template;
  },

  render: function() {
    // var html = this.template({stock: this.stock});
    var html = '<li class="quote">';
    html += '<h2>' + this.stock.symbol + '</h2>';
    html += '<p>' + this.stock.price + '</p>';
    html += '</li>';
    console.log(html);
    this.$el.html($(html));

    // Enable chained calls
    return this;
  }
});

// var ApplicationView = Backbone.View.extend({
//   initialize: function(options) {
//     // Store a the full list of tasks
//     this.stockData = options.stockData;
//     this.applicationTemplate = _.template($('#tmpl-quote-view').html());
//     this.listElement = this.$('.quotes');
//
//     this.stockList = [];
//     this.stockData.forEach(function(quotePrice){
//       var item = new QuoteView({
//         stock: quotePrice,
//         template: this.applicationTemplate
//       });
//       this.stockList.push(item);
//
//     }, this);
//   },
//
//   render: function() {
//     this.listElement.empty();
//
//     this.stockList.forEach(function(item) {
//     // Cause the task to render
//     item.render();
//
//     // Add that HTML to our task list
//     this.listElement.append(item.$el);
//   }, this);
//
//   return this; // enable chained calls
//   }
//
// });

// $(document).ready(function() {
//   var application = new ApplicationView({
//     el: $('#application'),
//     stockData: stockData
//   });
//   application.render();
// });

// $(document).ready(function() {
//   var quoteTemplate = _.template($('#tmpl-quote-view').html());
//   var stockQuoteElement = $('.quotes');
//   var stockList = [];
//   stockData.forEach(function(quotePrice){
//     var item = new QuoteView({
//       stock: quotePrice,
//       template: quoteTemplate
//     });
//     this.stockList.push(item);
//     stockQuoteElement.append(item.render().$el);
//   });
// });

$(document).ready(function() {
  var stockQuoteElement = $('.quotes');
  var stockList = [];
  stockData.forEach(function(quotePrice){
    var item = new QuoteView({
      stock: quotePrice//,
      // template: quoteTemplate
    });
  });
});
