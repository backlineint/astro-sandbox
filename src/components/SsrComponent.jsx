import React from 'react';

const SsrCompnent = ({type}) => {
  console.log(`Only the ${type} instance of this component should log this to the console`);
  return(<p>SSR Component</p>)
}

export default SsrCompnent;