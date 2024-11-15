const messages = require("../json/messages.json");

const get_message = (key, variables = {}) => {
  let message =
    messages.messages[key] || messages.errors[key] || "Mensaje no definido";
  for (const [placeholder, value] of Object.entries(variables)) {
    message = message.replace(`\${${placeholder}}`, value);
  }
  return message;
};

module.exports = get_message;
