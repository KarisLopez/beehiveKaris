class BeesComponent extends Component {
    constructor(parent){
        super(parent);
        this.container.id = 'BeesComponent';
        this.container.classList.add('BeesComponent');
    }

    addBees(bees) {

        this.addInitialSpace();

        this.titleCol = document.createElement('div');
        this.titleCol.classList.add('BeeTitleCol');
        this.container.appendChild(this.titleCol);
        var h2 = document.createElement("p");
        h2.innerHTML = '<b>Bees</b>'
        h2.classList.add("h2");
        this.titleCol.appendChild(h2);
  
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