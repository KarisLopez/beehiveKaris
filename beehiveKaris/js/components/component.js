class Component {
    constructor(parent){
        this.container = document.createElement('div');
        this.parent = parent;
        this.parent.appendChild(this.container);
        this.children = [];
    }

    hide() {
        this.container.style.display = 'none';
    }

    show() {
        this.container.style.display = 'block';
    }

    addInitialSpace() {
        var space = document.createElement('div');
        space.classList.add('nav-bar-space');
        this.container.append(space);
    }

    addChild(component){
        this.children.push(component);
    }

    cleanChildren(){
        this.children = [];
    }

    changeToDesktop(){

    }
}