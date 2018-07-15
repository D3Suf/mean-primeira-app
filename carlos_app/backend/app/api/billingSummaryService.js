const _ = require("lodash");
const BillingCycle = require("./billingCycles");

function getSummary(req, res) {
  BillingCycle.aggregate([
    {
      $project: {
        credit: { $sum: "$credits.value" },
        debt: { $sum: "$debts.value" }
      }
    },
    {
      $group: {
        _id: null,
        credit: { $sum: "$credit" },
        debt: { $sum: "$debt" }
      }
    },
    {
      $project: { _id: 0, credit: 1, debt: 1 }
    }
  ]).exec(function(error, result) {
    if (error) {
      res.status(500).json({ errors: [error] });
    } else {
      // caso o resultado não tem credit e/ debito é introduzido credit:0 e/ debt: 0
      res.status(200).json(_.defaults(result[0], { credit: 0, debt: 0 }));
    }
  });
}

module.exports = { getSummary };
/** getSummary: {getSummary} */
