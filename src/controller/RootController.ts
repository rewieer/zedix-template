import { ControllerInterface, Query } from "zedix";

class RootController implements ControllerInterface {
  @Query("app")
  async appQuery() {
    return "Hello World!";
  }
}

export default RootController;
