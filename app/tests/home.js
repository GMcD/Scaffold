define(['home'], function(Home) {

	return describe('Backbone Home :: ', function() {

		describe('View :: ', function() {
			it('is Welcome Home!', function(){
				var view = Home.HomeView();
				var content = $('div#stage p').text();
				expect(content).toEqual('Welcome Home!');
			});
		});		
	});
});
