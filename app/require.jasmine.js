require.config({
  urlArgs: 'cb=' + Math.random(),
  paths: {
    jasmine         : 'bower_components/jasmine/lib/jasmine-core/jasmine',
    'jasmine-html'  : 'bower_components/jasmine/lib/jasmine-core/jasmine-html',
  },
  shim: {
    jasmine: {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    }
  }
});

require(['underscore', 'jquery', 'jasmine-html'], function(_, $, jasmine){
 
  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;
 
  var htmlReporter = new jasmine.HtmlReporter();
 
  jasmineEnv.addReporter(htmlReporter);
 
  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };
 
  var specs = [];
 
  specs.push('tests/Home');
 
  $(function(){
    require(specs, function(){
      jasmineEnv.execute();
    });
  });
 
});
