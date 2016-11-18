require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
let imageDatas = require('../data/imageDatas.json');

let imageUrlDatas = (function genImageUrl(imageDatas) {
  for(let i=0;i<imageDatas.length;i++){
    let singleData = imageDatas[i];
    singleData.imageUrl = '../images/'+singleData.filename;
    imageDatas[i] = singleData;
  }
  return imageDatas;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">

        </section>
        <nav className="controller-nav">

        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
