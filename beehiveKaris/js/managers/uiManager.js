class UIManager {
    constructor(appManager) {
        this.appManager = appManager;
        this.postReceivingComment = null;
        this.receivingPost = null;
        this.beeComponentSelected = null;
        this.loadingComponent = new LoadinComponent(document.body);
        this.headerComponent = new HeaderComponent(document.body);
        this.appComponent = new AppComponent(document.body);
    }

    showLoading() {
        console.log('SHOW LOADING');
    }

    showUI(){
        console.log("SHOW UI");
        this.loadingComponent.hide();
        this.appComponent.beesComponent.addBees(this.appManager.dataManager.bees);
    }

    refreshPostsComponent(beeComponent, resetPosition) {

        if (this.beeComponentSelected !== null) {
            this.beeComponentSelected.container.classList.remove('beeSelected');
        }

        this.beeComponentSelected = beeComponent;
        this.beeComponentSelected.container.classList.add('beeSelected');
        this.appComponent.postsComponent.showBeePosts(beeComponent.model, resetPosition);
        this.appComponent.albumsComponent.showBeePhotos(beeComponent.model, resetPosition);
        this.appComponent.toDosComponent.showToDos(beeComponent.model, resetPosition);

        if (this.uiState === this.MOBILE) {
            this.appComponent.postsComponent.show();
        }
    }

    onTablet(e) {
        if (e.matches) {
            this.uiState = this.TABLET;
            this.appComponent.beesComponent.changeToTablet();
            this.appComponent.postsComponent.show();
            this.appComponent.navBarComponent.hide();
            console.log(this.uiState);
        }
    }

    onMobile(e) {
        if (e.matches) {
            this.uiState = this.MOBILE;
            this.appComponent.beesComponent.changeToMobile();
            this.appComponent.postsComponent.hide();
            this.appComponent.navBarComponent.show();
            console.log(this.uiState);
        }
    }

    onDesktop(e) {
        if (e.matches) {
            this.uiState = this.DESKTOP;
            this.appComponent.beesComponent.changeToDesktop();
            console.log(this.uiState);
        }
    }

    hideCommentForm() {
        this.appComponent.commentFormComponent.hide();
    }

    hidePostForm() {
        this.appComponent.postFormComponent.hide();
    }

    hideTodoForm(){
        this.appComponent.todoFormComponent.hide();
    }


    addNewComment(title, body) {
        var comment = new Comment(body, AppManager.getInstance().owner.email, this.postReceivingComment.id, title, this.postReceivingComment.comments.length);
        this.postReceivingComment.addComment(comment);
        console.log(this.postReceivingComment);
        this.refreshPostsComponent(this.beeComponentSelected, false);
        this.appComponent.commentFormComponent.hide();
    }

    showCommentForm(post) {
        this.postReceivingComment = post;
        console.log("commentFormComponent");
        this.appComponent.commentFormComponent.show();// .appComponent.commentFormComponent.show();
    }

    addNewPost(title, body) {
        var userId = AppManager.getInstance().owner.id;
        var id = this.beeComponentSelected.model.posts.length+1;
        var post = new Post(body, id, title, userId);
        console.log(body, id, title, userId);
        this.beeComponentSelected.addPost(post);
        this.refreshPostsComponent(this.beeComponentSelected, false);
        this.appComponent.postFormComponent.hide();
    }

    showPostForm() {
        //this.beeComponentSelected = bee;
        //console.log("postFormComponent");
        //console.log(this.beeComponentSelected);
        this.appComponent.postFormComponent.show();
    }

    addNewTodo(title){
        var completed = false;
        var id = this.beeComponentSelected.model.todos.length+1;
        var userId = AppManager.getInstance().owner.id;
        var todo = new ToDo(completed, id, title, userId);
        console.log(completed, id, userId, title);
        this.beeComponentSelected.addToDos(todo);
        this.refreshPostsComponent(this.beeComponentSelected, false);
        this.appComponent.todoFormComponent.hide();
    }

    showTodoForm(){
        this.appComponent.todoFormComponent.show();
    }

    showImage(photo) {
        this.appComponent.photoComponent.showImage(photo);
    }

    hideImage() {
        this.appComponent.photoComponent.hide();
    }
}