import React from 'react';
import { Helmet } from 'react-helmet';

class HtmlHeader extends React.Component {
  const 
  render() {
     let {title,description,keywords}=this.props;
     if(keywords?.length>0 && typeof(keywords)!=="string") keywords=keywords.join(", ")
     else if (!keywords || keywords==="")
     keywords=title;
    return (
      <div>
        <Helmet>
          <title> {title} </title>
          <meta charset="UTF-8"/>
          <meta name="description" content={description} />
          <meta name="author" content={description} />
          <meta property="og:local" content="es_ES" />
          <meta property="og:type" content="website" />
          <meta name="robots" content="index, follow"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
          <meta name="keywords" content={keywords}/>
          <link rel="canonical" href={window.location.href} />
        </Helmet>
      </div>
    );
  }
}
export default HtmlHeader;