module.exports = function (app, express) {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.use(express.json());
};
