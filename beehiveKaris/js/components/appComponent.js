class AppComponent extends Component {
    constructor(parent){
        super(parent);
        this.container.id = 'appComponent';
        this.container.classList.add('appComponent');
        this.section1 = document.createElement('section');
        this.section1.classList.add('section1');
        this.container.appendChild(this.section1);
        this.section2 = document.createElement('section');
        this.section2.classList.add('section2');
        this.container.appendChild(this.section2);
        
        this.commentFormComponent = new CommentFormComponent(this.container);
        this.postFormComponent = new PostFormComponent(this.container);
        this.todoFormComponent = new TodoFormComponent(this.container);
        this.photoComponent = new PhotoComponent(this.container);

        this.beesComponent = new BeesComponent(this.section1);
        this.postsComponent = new PostsComponent(this.section1);
        this.albumsComponent = new AlbumComponent(this.section2);
        this.toDosComponent = new ToDosComponent(this.section2);
    }
}