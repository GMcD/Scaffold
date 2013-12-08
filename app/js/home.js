define([ 'jquery', 'underscore', 'backbone', 'text!tpl/homeTemplate.html'], 
    function( $, _, Backbone, homeTemplate ) {

    /*
     * Simple View
     */
    var HomeView = Backbone.View.extend({
        el : $('div#stage'),
        tagName : 'div',
        className : 'home',
        /*
         * Initialise and render
         */
        initialize: function(options){
            this.template = _.template( homeTemplate );
            this.render();
        },
        /*
         * Renders Home View
         */
        render: function(){
            var html = this.template();
            this.$el.html(html);
            return this;
        },
    });

    return { HomeView : HomeView };

});
