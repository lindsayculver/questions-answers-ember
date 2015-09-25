import Ember from 'ember';

export default Ember.Component.extend({
  isNotesShowing: false,
  updateQuestion: false,

  actions: {
    notesShow() {
      this.set('isNotesShowing', true);
    },

    update(question,params) {
      this.sendAction('update', question, params);
    },

    delete(question) {
      if (confirm('Are you wure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
