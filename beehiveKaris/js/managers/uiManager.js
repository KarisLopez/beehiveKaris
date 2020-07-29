class UIManager {
    constructor(appManager) {
        this.appManager = appManager;
        this.postReceivingComment = null;
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

    addNewComment(title, body) {
        //body, email, id, name, postId
        //var comment = new Comment(this.postReceivingComment.comments.length, this.postReceivingComment.id, title, body, AppManager.getInstance().owner.email);
        var comment = new Comment(body, AppManager.getInstance().owner.email, this.postReceivingComment.id, title, this.postReceivingComment.comments.length);
        this.postReceivingComment.addComment(comment);
        this.refreshPostsComponent(this.beeComponentSelected, false);
        this.appComponent.commentFormComponent.hide();
    }

    showCommentForm(post) {
        this.postReceivingComment = post;
        console.log("commentFormComponent");
        this.appComponent.commentFormComponent.show();// .appComponent.commentFormComponent.show();
    }

    showImage(photo) {
        this.appComponent.photoComponent.showImage(photo);
    }

    hideImage() {
        this.appComponent.photoComponent.hide();
    }
}