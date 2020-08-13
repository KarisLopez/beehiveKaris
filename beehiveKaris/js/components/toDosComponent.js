class ToDosComponent extends Component {
    constructor(parent) {
      super(parent);
      this.container.id = "todosComponent";
      this.container.classList.add("todosComponent");
    }

    showToDos(bee, resetPosition){
        // console.log(bee);
        if(resetPosition) {
            this.container.scrollTo(0, 0);
        }
        this.container.innerHTML = '';

        this.titleCol = document.createElement('div');
        this.titleCol.classList.add('ToDoTitleCol');
        this.container.appendChild(this.titleCol);

        this.leftcol = document.createElement('div');
        this.leftcol.classList.add('leftcol');
        this.titleCol.appendChild(this.leftcol);

        this.rightcol = document.createElement('div');
        this.rightcol.classList.add('rightcol');
        this.titleCol.appendChild(this.rightcol);

        var h2 = document.createElement("p");
        h2.innerHTML = "<b>Bee's To Dos</b>"
        h2.classList.add("h2");
        this.leftcol.appendChild(h2);

        var addToDoBtn = document.createElement('button');
        addToDoBtn.innerHTML = 'Add';
        //addToDoBtn.onclick = this.onAddToDoClick.bind(this);
        addToDoBtn.classList.add("addToDoBtn");
        this.rightcol.appendChild(addToDoBtn);
  
        bee.todos.forEach((todo) => {
            var todoComponent = new ToDoComponent(this.container, todo);
        })
    }
}