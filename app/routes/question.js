import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    save(params) {
      var newAnswer =
      this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('question-detail', params.question);
    
    // destroyAnswer(answer) {
    //   answer.destroyRecord();
    //   this.transitionTo('question-detail');
    }
  }
});
