import App, { configurable, LoggerService, ORMService, MailerService, TemplatingService, WebRouter, GraphQLRouter } from "zedix";

import config from "../config/config";
import RootController from "./controller/RootController";

const createMailerConfig = config => {
  return [
    {
      host: config.parameters.SMTP_HOST,
      port: config.parameters.SMTP_PORT,
      secure: false,
      auth: config.parameters.SMTP_AUTH
    }
  ];
};

export default (env: "production" | "development" | "test") => {
  return App.configure({
    config: config,
    logger: new LoggerService({
      env: config.parameters.ENV,
      ...config.logger
    }),
    controllers: [
      new RootController(),
    ],
    services: [
      ORMService,
      configurable(MailerService, createMailerConfig),
      TemplatingService
    ],
    middlewares: [],
    routers: [
      new GraphQLRouter({
        schemaPath: __dirname + "/schema",
      }),
      new WebRouter({
        views: config.paths.views,
        public: config.paths.public
      })
    ]
  });
};
