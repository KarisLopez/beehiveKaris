class ToDoComponent extends Component{
    constructor(parent, model) {
        super(parent);
        this.model = model;
        this.container.classList.add('todoComponent');

        this.title = document.createElement('p');
        this.title.innerHTML = this.model.title;
        this.title.classList.add('todoTitle');
        this.container.appendChild(this.title);

        if (this.model.completed == true) {
            this.container.classList.add('todoCompleted');
        }
    }
}