// import Ember from 'ember';

export default Ember.Component.extend({
  isNotesShowing: false,
  actions: {
    notesShow: function() {
      this.set('isNotesShowing', true);
    },

    delete(question) {
      if (confirm('Are you wure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
