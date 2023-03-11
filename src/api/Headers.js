class Headers {
  constructor(method, body) {
    this.method = method;
    this.headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "token":"wdxbXcuJgHfuXxbQ",
    };
    if (body !== undefined) {
      this.body = JSON.stringify(body);
    }
  }
}
export default Headers;
