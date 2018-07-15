/** criar facilmenete end-points? lets see
 *  integração do mongoose com o express, humm
 */
const restful = require("node-restful");
const mongoose = restful.mongoose;

const creditSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: true }
});

const debtSchema = new mongoose.Schema({
  name: { type: String, required: true },
  /** costume error mensage */
  value: { type: Number, min: 0, required: [true, 'O Valor do débito é obrigatório.'] },
  status: {
    type: String,
    uppercase: true,
    required: false,
    enum: ["PAGO", "PENDENTE", "AGENDADO"]
  }
});

const billingCycleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  month: { type: Number, min: 1, max: 12, required: true },
  year: { type: Number, min: 1970, max: 2200, required: true },
  credits: [creditSchema],
  debts: [debtSchema]
});

module.exports = restful.model("BillingCycle", billingCycleSchema);
