Handlebars.registerHelper('ifEq', function (a, b, options) {
  return (a == b) ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('ifNotEq', function (a, b, options) {
  if (a != b) { return options.fn(this); }
  return options.inverse(this);
});