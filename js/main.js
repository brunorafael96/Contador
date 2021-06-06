 jQuery(function ($) {
  'use strict';



  var App = {
    $options: {},
    $loader: $(".loader"),
    $animationload: $(".animationload"),
    $countdown: $('#countdown_dashboard'),

    bindEvents: function() {
      
      $(window).on('load', this.load.bind(this));
      $(document).on('ready', this.docReady.bind(this));
    },
    load: function() {
      
      this.$loader.delay(300).fadeOut();
      this.$animationload.delay(600).fadeOut("slow");
    },
    docReady: function() {
      
        this.$countdown.countDown({
          targetDate: {
            'day':    this.$options.day,
            'month':  this.$options.month,
            'year':   this.$options.year,
            'hour':   this.$options.hour,
            'min':    this.$options.min,
            'sec':    this.$options.sec
          },
          omitWeeks: true
        });


      $("html").niceScroll({
        scrollspeed: 50,
        mousescrollstep: 38,
        cursorwidth: 7,
        cursorborder: 0,
        autohidemode: true,
        zindex: 9999999,
        horizrailenabled: false,
        cursorborderradius: 0
      });

      $(window).stellar({
        horizontalScrolling: false,
        responsive: true,
        scrollProperty: 'scroll',
        parallaxElements: false,
        horizontalOffset: 0,
        verticalOffset: 0
      });

      
    },
    init: function (_options) {
      $.extend(this.$options, _options);
      this.bindEvents();
    }
  }

  //data para o contador 
  App.init({day: 23, month: 7, year: 2021, hour: 7, min: 59, sec: 59});
});