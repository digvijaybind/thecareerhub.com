import Header from "./Headers";
import Const from "../util/Constants";
import Config from "../config/config";

class CareerAPI {
  static list = (list, success, failure, logout) => {
    fetch(Config.link + "career/list", new Header("POST", list))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => failure(er));
  };

  static details = (id, success, failure, logout) => {
    fetch(Config.link + "career/" + id, new Header("GET"))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => failure(er));
  };

  static relatedCourse = (list, success, failure, logout) => {
    fetch(Config.link + "career/relatedCourse", new Header("POST", list))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => failure(er));
  };

  static relatedCollege = (list, success, failure, logout) => {
    fetch(Config.link + "career/relatedCollege", new Header("POST", list))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => failure(er));
  };

  static relatedCareer = (list, success, failure, logout) => {
    fetch(Config.link + "career/relatedCareer", new Header("POST", list))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => failure(er));
  };

}
export default CareerAPI;
