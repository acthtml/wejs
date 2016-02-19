import webpack from 'webpack';

export default function complier(){
  var config  = {
    entry : './themes/components/app.js',
    output : {
      filename : 'app.js',
      path : './build/scripts/'
    },
    module : {
      loaders : [
        {
          test : /\.js$/,
          loaders: ['babel-loader']
        },
        {
          test : /\.css$/,
          loaders : ['style', 'css']
        }
      ]
    }
  }

  webpack(config, function(err, stats){
    // console.log(stats)
  });
}
