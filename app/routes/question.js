import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    save(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);

    // destroyAnswer(answer) {
    //   answer.destroyRecord();
    //   this.transitionTo('question-detail');
    },
    voteUp(answer) {
      answer.set('votes', answer.get('votes') + 1);
      answer.save(),
      this.transitionTo('question')
    },
    voteDown(answer) {
      answer.set('votes', answer.get('votes') - 1);
      answer.save(),
      this.transitionTo('question')
    }
  }

});
