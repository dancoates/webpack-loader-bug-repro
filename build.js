var webpack = require('webpack');

webpack({
    entry : './index.js',
    output : {
        path : __dirname + '/dist',
        filename : 'bundle.js'
    },
    module : {
        loaders : [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: './testing-looader' // misspelled
            }
        ]
    },
   
}, function(err, stats) {
    console.log(err);
});