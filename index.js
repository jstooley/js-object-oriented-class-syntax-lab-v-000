class BoardMember {

  constructor( name , homeState , training ){
    this.name = name
    this.homeState = homeState
    this.training = training
  }

  veto() {
    return "No, I must disagree"
  }
  approve(){
    return "You can do that!"
  }
  releasePressStatement(){
    return "Ypu will see great things from Scuber."
  }

}
