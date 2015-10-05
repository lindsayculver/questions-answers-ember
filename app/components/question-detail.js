import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    save() {
      var params = {
        author: this.get('author'),
        text: this.get('text'),
        question: this.get('question'),
        date_added: Date.now()
      };
      
      this.sendAction('save', params),
      this.set('addNewAnswer', false);
    }
  }
});
