import Header from "./Headers";
import Const from "../util/Constants";
import Config from "../config/config";

class ModelAPI {
  static getModel = (success, failure, logout) => {
    fetch(Config.link + "api/model", new Header("GET"))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => failure(er));
  };

  static getCourseModel = (success, failure, logout) => {
    fetch(Config.link + "api/courseModel", new Header("GET"))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => failure(er));
  };

  static getCollegeModel = (success, failure, logout) => {
    fetch(Config.link + "api/collegeModel", new Header("GET"))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => failure(er));
  };

  static getCareerModel = (success, failure, logout) => {
    fetch(Config.link + "api/careerModel", new Header("GET"))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => failure(er));
  };
  
  static getIndustryModel = (success, failure, logout) => {
    fetch(Config.link + "api/industryModel", new Header("GET"))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => failure(er));
  };

  static getExamModel = (success, failure, logout) => {
    fetch(Config.link + "api/examModel", new Header("GET"))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => failure(er));
  };

  static getBlogModel = (success, failure, logout) => {
    fetch(Config.link + "api/blogModel", new Header("GET"))
      .then((res) => Const.ProcessAPI(res, success, failure, logout))
      .catch((er) => failure(er));
  };
  


}
export default ModelAPI;
