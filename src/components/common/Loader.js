import React from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";
class Loader extends React.Component {
  
  render() {
    return <div className="loader-style"><PacmanLoader color='#112152'/></div>;
  }
}
export default Loader;