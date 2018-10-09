/** responsavel pelo a conexão e mapeamento dos dados para os nossos objetos */
const mongoose = require("mongoose");
/** retificar esta ligação e este ficheiro pelo o meu config das outras api's */
module.exports = mongoose.connect(
  "mongodb://localhost:27017/db_finance",
  { useNewUrlParser: true }
);


/** costume error mensage mongoose */
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
