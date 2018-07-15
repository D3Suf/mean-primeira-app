const express = require("express");

module.exports = function(server) {
  // API Routes
  const router = express.Router();
  server.use("/api", router);

  // api routes
  const billingCycleService = require("../api/billingCycleService");
  billingCycleService.register(router, "/billingCycles");

  const billingSummaryService = require("../api/billingSummaryService");
  router.route("/billingSummary").get(billingSummaryService.getSummary);
};
