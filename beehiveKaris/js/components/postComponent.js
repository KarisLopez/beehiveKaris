class PostComponent extends Component{
    constructor(parent, model) {
        super(parent);
        this.model = model;
        this.container.classList.add('postComponent');

        this.title = document.createElement('p');
        this.title.innerHTML = this.model.title;
        this.title.classList.add('postTitle');
        this.container.appendChild(this.title);

        this.body = document.createElement('p');
        this.body.innerHTML = this.model.body;
        this.body.classList.add('postBody');
        this.container.appendChild(this.body);

        this.addCommentBtn = document.createElement('button');
        this.addCommentBtn.innerHTML = 'Add Comment';
        this.addCommentBtn.onclick = this.onAddCommentClick.bind(this);
        this.addCommentBtn.classList.add('addCommentButton');
        this.container.appendChild(this.addCommentBtn);

        this.model.comments.forEach((comment) => {
            var commentComponent = new CommentComponent(this.container, comment);
        })
    }

    onAddCommentClick(e){
        AppManager.getInstance().uiManager.showCommentForm(this.model);
    }
}