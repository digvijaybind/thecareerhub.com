import React from "react";
import { Helmet } from "react-helmet";
import { withRouter } from "next/router";
import config from "@/config/config";

class HtmlHeader extends React.Component {
  constructor(props) {
    super(props);
    this.link = `${config.baseUrl}${this.props.router.pathname?.slice(
      1,
      this.props.router.pathname.length
    )}`;
    if (this.link[this.link.length - 1] === "/")
      this.link = this.link.slice(0, this.link.length - 1);
  }
  render() {
    let { title, description, keywords } = this.props;
    if (keywords?.length > 0 && typeof keywords !== "string")
      keywords = keywords.join(", ");
    else if (!keywords || keywords === "") keywords = title;
    return (
      <div>
        <Helmet>
          <title> {title} </title>
          <meta charset="UTF-8" />
          <meta name="description" content={description} />
          <meta name="author" content={description} />
          <meta property="og:local" content="es_ES" />
          <meta property="og:type" content="website" />
          <meta name="robots" content="index, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta name="keywords" content={keywords} />
          <link rel="canonical" href={this.link} />
        </Helmet>
      </div>
    );
  }
}
export default withRouter(HtmlHeader);
