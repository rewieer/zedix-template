import App, { configurable, LoggerService, ORMService, MailerService, TemplatingService, ExpressRouter, GraphQLRouter } from "zedix";

import config from "../config/config";

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
    controllers: [],
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
      new ExpressRouter({
        views: config.paths.views,
        public: config.paths.public
      })
    ]
  });
};
