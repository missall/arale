// arale alias 
define({
    alias: {
        '$': 'jquery/1.7.2/jquery',
        'jquery': 'jquery/1.7.2/jquery',
        'zepto': 'zepto/0.9.0/zepto',
        'underscore': 'underscore/1.3.3/underscore',
        'json': 'json/1.0.2/json',
        'handlebars': 'handlebars/1.0.0/handlebars',
        'moment': 'moment/1.6.2/moment',
        'async': 'async/0.1.18/async',
        'store': 'store/1.3.3/store',
        'swfobject': 'swfobject/2.2.0/swfobject',
        'backbone': 'backbone/0.9.2/backbone',
        'jasmine': 'jasmine/1.1.0/jasmine-html'
    },
    preload: [this.JSON ? '' : 'json', 'plugin-text']
});
