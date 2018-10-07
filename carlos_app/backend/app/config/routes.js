const express = require("express");
const auth = require("./auth");

module.exports = function(server) {
  /**
   * Rotas Abertas
   */
  const openApi = express.Router();
  server.use("/oapi", openApi);

  const AuthService = require("../api/user/authService");
  openApi.post("/login", AuthService.login);
  openApi.post("/signup", AuthService.signup);
  openApi.post("/validateToken", AuthService.validateToken);

  /**
   * Rotas protegidas por Token JWT
   */
  const protectedApi = express.Router();
  server.use("/api", protectedApi);

  //chamada ao auth API
  protectedApi.use(auth);

  // importando os métodos disponiveis em billingCycleService
  const billingCycleService = require("../api/billingCycleService");
  // registando esses metodos no endPoint "/api/billingCycles"
  billingCycleService.register(protectedApi, "/billingCycles");

  const billingSummaryService = require("../api/billingSummaryService");
  protectedApi.route("billingSummary").get(billingSummaryService.getSummary);

  /** [ANTES DA AUTENTICAÇÃO]
  // API Routes
  const router = express.Router();
  server.use("/api", router);

  // api routes
  const billingCycleService = require("../api/billingCycleService");
  billingCycleService.register(router, "/billingCycles");

  const billingSummaryService = require("../api/billingSummaryService");
  router.route("/billingSummary").get(billingSummaryService.getSummary);
  */
};
