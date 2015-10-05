import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    voteUp(answer) {
        console.log("voting up");
        this.sendAction('voteUp', answer)


    },
    voteDown(answer) {
        console.log("voting down");
        this.sendAction('voteDown', answer)

    }
  }
});
