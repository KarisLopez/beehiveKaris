class BeesComponent extends Component {
    constructor(parent){
        super(parent);
        this.container.id = 'BeesComponent';
        this.container.classList.add('BeesComponent');
    }

    addBees(bees) {

        this.addInitialSpace();
  
        bees.forEach((bee, index) => {
            var beeComponent = new BeeComponent(this.container, bee);
            this.addChild(beeComponent);
            if (index === 0) {
                AppManager.getInstance().uiManager.refreshPostsComponent(beeComponent);
            }
        })
    }

    changeToDesktop() {
        this.children.forEach((beeComponent) => {
            beeComponent.changeToDesktop();
        })
    }
}