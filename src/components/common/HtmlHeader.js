import React from 'react';
import { Helmet } from 'react-helmet';

class HtmlHeader extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title> {this.props.title} </title>
          <meta name="description" content={this.props.title} />
        </Helmet>
      </div>
    );
  }
}
export default HtmlHeader;