import Header from "./Headers";
import Const from "../util/Constants";
import Config from "../config/config";

class ExamAPI {
  static list = (list, success, failure, logout) => {
    fetch(Config.link + "exam/list", new Header("POST", list))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => failure(er));
  };
  
  static details = (id, success, failure, logout) => {
    fetch(Config.link + "exam/" + id, new Header("GET"))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => failure(er));
  };
}
export default ExamAPI;
