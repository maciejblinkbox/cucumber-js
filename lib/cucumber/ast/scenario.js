var Scenario = function(keyword, name) {
  var Cucumber = require('../../cucumber');

  var steps = Cucumber.Types.Collection();

  var self = {
    getKeyword: function getKeyword() {
      return keyword;
    },

    getName: function getName() {
      return name;
    },

    addStep: function addStep(step) {
      steps.add(step);
    },

    getLastStep: function getLastStep() {
      return steps.getLast();
    },

    acceptVisitor: function acceptVisitor(visitor, callback) {
      steps.forEach(function(step, iterate) {
        visitor.visitStep(step, iterate);
      }, callback);
    }
  };
  return self;
};
module.exports = Scenario;