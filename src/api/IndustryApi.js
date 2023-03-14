import Header from "./Headers";
import Const from "../util/Constants";
import Config from "../config/config";

class IndustryAPI {  
  static list = (list, success, failure, logout) => {
    fetch(Config.link + "industry/list", new Header("POST", list))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => {console.log(er)});
  }; 

  static details = (id, success, failure, logout) => {
    fetch(Config.link + "industry/" + id, new Header("GET"))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => {console.log(er)});
  };
  
  static related_course = (list, success, failure, logout) => {
    fetch(Config.link + "industry/relatedCourse", new Header("POST", list))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => {console.log(er)});
  };

  static relatedCollege = (list, success, failure, logout) => {
    fetch(Config.link + "industry/relatedCollege", new Header("POST", list))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => {console.log(er)});
  };

  static relatedCareer = (list, success, failure, logout) => {
    fetch(Config.link + "industry/relatedCareer", new Header("POST", list))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => {console.log(er)});
  };  

}

export default IndustryAPI;
