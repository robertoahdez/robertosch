writeData = => {
  base.database().ref('/').set({
    comp1: this.state.newValue
  });
}
