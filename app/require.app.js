require.config({
  paths: {
    jquery          : 'bower_components/jquery/jquery',
    underscore      : 'bower_components/underscore/underscore',
    backbone        : 'bower_components/backbone/backbone',
    localstorage    : 'bower_components/backbone.localstorage/backbone.localStorage',
    modal           : 'bower_components/bootstrap-sass/js/modal',
    text            : 'bower_components/requirejs-text/text',
    modernizr       : 'bower_components/modernizr/modernizr',
    fastclick       : 'bower_components/fastclick/lib/fastclick',
    jcore           : 'bower_components/jquery-ui/ui/jquery.ui.core',
    jmouse          : 'bower_components/jquery-ui/ui/jquery.ui.mouse',
    jwidget         : 'bower_components/jquery-ui/ui/jquery.ui.widget',
    jdraggable      : 'bower_components/jquery-ui/ui/jquery.ui.draggable',
    jdroppable      : 'bower_components/jquery-ui/ui/jquery.ui.droppable',
    jtouch          : 'js/libs/jquery.ui.touch-punch',
    jsv             : 'js/libs/jsv',
    jsonform        : 'js/libs/jsonform',
    jscroll         : 'js/libs/jquery.jscrollpane',
    touchy          : 'js/libs/jquery.touchy',
    home            : 'js/home',
    router          : 'js/router',
    app             : 'js/app'
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    localstorage: {
      deps: ['underscore', 'jquery', 'backbone'],
      exports: 'Backbone.LocalStorage'
    },
    modernizr: {
      exports: 'Modernizr'
    },
    jsv: {
      exports: 'JSV'
    },
    jsonform: {
      deps: ['underscore', 'jquery', 'jsv'],
      exports: 'JSONForm'
    },
    modal: {
        deps: [ 'jquery' ],
        exports: 'jQuery.fn.modal'
    },
    jcore: {
        deps: [ 'jquery' ],
        exports: 'jQuery.ui'
    },
    jwidget: {
        deps: [ 'jquery', 'jcore' ],
        exports: 'jQuery.ui.widget'
    },
    jmouse: {
        deps: [ 'jquery', 'jcore', 'jwidget' ],
        exports: 'jQuery.ui.mouse'
    },
    jdraggable: {
        deps: [ 'jquery', 'jcore', 'jwidget', 'jmouse' ],
        exports: 'jQuery.ui.draggable'
    },
    jdroppable: {
        deps: [ 'jquery', 'jcore', 'jwidget', 'jmouse' ],
        exports: 'jQuery.ui.droppable'
    },
    jtouch : {
        deps: [ 'jquery', 'jcore', 'jwidget', 'jmouse', 'jdraggable', 'jdroppable' ],
        exports: 'jQuery.support.touch'
    },
    jscroll: {
      deps: ['jquery'],
      exports: 'jquery.jscrollpane'
    },
    touchy: {
      deps: ['jquery'],
      exports: 'jquery.touchy'
    },
  }
});

require(['app']);
