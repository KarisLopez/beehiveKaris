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
  
        bee.todos.forEach((todo) => {
            var todoComponent = new ToDoComponent(this.container, todo);
        })
    }
}