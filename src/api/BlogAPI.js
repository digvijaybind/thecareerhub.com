import Header from "./Headers";
import Const from "../util/Constants";
import Config from "../config/config";

class BlogAPI {  
  static list = (list, success, failure, logout) => {
    fetch(Config.link + "blog/list", new Header("POST", list))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => failure(er));
  }; 

  static details = (id, success, failure, logout) => {
    fetch(Config.link + "blog/" + id, new Header("GET"))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => failure(er));
  };

}

export default BlogAPI;
