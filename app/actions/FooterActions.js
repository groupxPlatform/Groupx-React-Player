import alt from './alt';

class FooterActions {
  constructor(){
    this.generateActions(
      'getTopCharactersSucces',
      'getTopChatactersFail'
    );
  }
  getTopCharacters(){
    $.ajax({url:'/api/characters/top'})
    .done((data) => {
      this.actions.getTopCharactersSuccess(data)
    })
    .fail((jqXhr) => {
      this.actions.getTopChatactersFail(jqXhr)
    });
  }
}

module.exports = alt.createActions(FooterActions);
