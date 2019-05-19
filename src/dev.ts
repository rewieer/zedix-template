import * as data from "../nodemon.json";
import DevRuntime from "zedix/dist/dev/DevRuntime";
import NodemonDevEnvironment from "zedix/dist/dev/NodemonDevEnvironment";

const runtime = new DevRuntime([new NodemonDevEnvironment(data)]);

runtime.start();
