class Constants {
  static defaultTitle = "The Career Hub";
  static defaultDescription = "Default Description";

  static Success200 = 200;
  static LIMIT = 10;
  static ProcessAPI = (res, success, error, logout) => {
    if (res.status === Constants.Success200) {
      res.json().then((result) => success(result));
    } else {
      throw res;
    }
  };
  static OldUrl = "https://alt.thecareerhub.com/";
  static backendLink = "https://backend.thecareerhub.com/";
  static testlink = "https://test.thecareerhub.com/";
  static Api_headers={
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    token: "wdxbXcuJgHfuXxbQ",
  }
}


export default Constants;

