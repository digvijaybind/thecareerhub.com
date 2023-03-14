import Header from "./Headers";
import Const from "../util/Constants";
import Config from "../config/config";

class CourseAPI {
  static list = (list, success, failure, logout) => {
    fetch(Config.link + "course/list", new Header("POST", list))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => {console.log(er)});
  };

  static details = (id, success, failure, logout) => {
    fetch(Config.link + "course/" + id, new Header("GET"))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => {console.log(er)});
  };

  static related_course = (list, success, failure, logout) => {
    fetch(Config.link + "course/relatedCourse", new Header("POST", list))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => {console.log(er)});
  };

  static relatedCollege = (list, success, failure, logout) => {
    fetch(Config.link + "course/relatedCollege", new Header("POST", list))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => {console.log(er)});
  };

  static relatedCareer = (list, success, failure, logout) => {
    fetch(Config.link + "course/relatedCareer", new Header("POST", list))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => {console.log(er)});
  };  

}
export default CourseAPI;
