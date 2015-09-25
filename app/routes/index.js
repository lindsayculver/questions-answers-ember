export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    save3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.TransitionTo('index');
    },
    
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});
