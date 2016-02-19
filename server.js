import http from 'http';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Html from './themes/components/Html/Html';
import Page from './themes/components/Page/Page';
import complier from './complier';
import fs from 'fs';

http.createServer(function(req, res){
  var url = req.url,
      result;

  if(url.indexOf('js') >= 0){
    // static file
    res.writeHead(200, {'content-type' : 'script/javascript'});
    // 获取对应的文件
    fs.readFile(__dirname + url, function(err, data){
      if(err){
        console.log(url + ' static file err')
      }else{
        console.log(url + ' static file success');
      }
      res.end(data);
    })
  }
  // page
  else{
    res.writeHead(200, {'content-type' : 'text/html'});
    var body = ReactDOMServer.renderToString(<Page />);
    var result = ReactDOMServer.renderToStaticMarkup(<Html body={body}/>);
    res.end(result);
  }
}).listen(3000, 'localhost');

// complier();
console.log('server run at localhost:3000');


