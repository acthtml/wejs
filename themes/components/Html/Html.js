import React from 'react';
import Page from '../Page/Page';
export default class Html extends React.Component {
  render (){
    var body = {
      __html : this.props.body
    }

    return (
      <html>
        <head>
          <title>hello</title>
        </head>
        <body>
          <div id="wrapper" dangerouslySetInnerHTML={body}></div>
          <script src="build/scripts/app.js"></script>
        </body>
      </html>
    );
  }
}
