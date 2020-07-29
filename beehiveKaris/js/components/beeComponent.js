class BeeComponent extends Component {
    constructor(parent, model){
        super(parent);
        this.model = model;
        this.container.id = "beeComponent";
        this.container.classList.add("beeComponent");

        this.leftCol = document.createElement('div');
        this.container.appendChild(this.leftCol);
        this.image = document.createElement('img');
        this.image.src = this.model.image;
        this.image.classList.add('beeImage');
        this.leftCol.appendChild(this.image);

        this.rightCol = document.createElement('div');
        this.rightCol.classList.add('beeRightCol');
        this.container.appendChild(this.rightCol);
        var beeName = document.createElement("p");
        beeName.innerHTML = model.name;
        beeName.classList.add("beeName");
        this.rightCol.appendChild(beeName);

        var beeUsername = document.createElement("p");
        beeUsername.innerHTML = '<b>Username:</b> ' + model.username;
        beeUsername.classList.add("beeUsername");
        this.rightCol.appendChild(beeUsername);

        var email = document.createElement("span");
        email.innerHTML = '<b>Email:</b>' + model.email;
        email.classList.add("beeEmail");
        this.rightCol.appendChild(email);

        var phone = document.createElement("p");
        phone.innerHTML = '<b>Phone: </b>' + model.phone;
        phone.classList.add("beePhone");
        this.rightCol.appendChild(phone);

        var website = document.createElement('a');
        website.href = model.website;
        website.innerHTML = model.website;
        website.classList.add("beeWebsite");
        this.rightCol.appendChild(website);

        this.indicatorsContainer = document.createElement('div');
        this.indicatorsContainer.classList.add('indicatorsContainer');
        this.rightCol.appendChild(this.indicatorsContainer);

        this.postsIndicator = document.createElement('div');
        this.postsIndicator.innerHTML = '<b>Post:</b>' + this.model.posts.length;
        this.postsIndicator.classList.add('indicator');
        this.indicatorsContainer.appendChild(this.postsIndicator);

        this.albumIndicator = document.createElement('div');
        this.albumIndicator.innerHTML = '<b>Album</b>:99';
        this.albumIndicator.classList.add('indicator');
        this.indicatorsContainer.appendChild(this.albumIndicator);

        this.todosIndicator = document.createElement('div');
        this.todosIndicator.innerHTML = '<b>Todos</b>:99';
        this.todosIndicator.classList.add('indicator');
        this.indicatorsContainer.appendChild(this.todosIndicator);

        

        /*switch (AppManager.getInstance().uiManager.uiState) {
            case AppManager.getInstance().uiManager.MOBILE:
                console.log('changeToMobile caca');
                this.changeToMobile();
                break;
            case AppManager.getInstance().uiManager.TABLET:
                this.changeToTablet();
                break;
            case AppManager.getInstance().uiManager.DESKTOP:
                this.changeToDesktop();
                break;
        }*/

        //NO SIRVE
        //this.indicatorsContainer.onclick = this.onContainerClick.bind(this);
        
        this.postsIndicator.onclick = this.onPostsIndicator.bind(this);
        this.albumIndicator.onclick = this.onAlbumIndicator.bind(this);
        this.todosIndicator.onclick = this.onTodosIndicator.bind(this);
    }

    onContainerClick(e) {
        //AppManager.getInstance().uiManager.refreshPostsComponent(this, true);
        var appManager = AppManager.getInstance();
        appManager.uiManager.refreshPostsComponent(this.model);
        console.log("caca");
    }

    changeToMobile() {
        console.log('changeToMobile');
        this.container.onclick = null;
        //this.container.onclick = this.onContainerClick.bind(this);
        this.postsIndicator.onclick = this.onPostsIndicator.bind(this);
        this.albumIndicator.onclick = this.onAlbumIndicator.bind(this);
        this.todosIndicator.onclick = this.onTodosIndicator.bind(this);
    }

    changeToTablet() {
        console.log('changeToTablet');
        this.container.onclick = null;
        this.postsIndicator.onclick = this.onPostsIndicator.bind(this);
        this.albumIndicator.onclick = this.onAlbumIndicator.bind(this);
        this.todosIndicator.onclick = this.onTodosIndicator.bind(this);
    }

    changeToDesktop() {
        this.container.onclick = this.onContainerClick.bind(this);
        this.postsIndicator.onclick = null;
        this.albumIndicator.onclick = null;
        this.todosIndicator.onclick = null;
    }

    onPostsIndicator() {
        console.log('onPostsIndicator');
        AppManager.getInstance().uiManager.refreshPostsComponent(this);
    }

    onAlbumIndicator() {
        console.log('onAlbumIndicator');
    }

    onTodosIndicator() {
        console.log('onTodosIndicator');
    }
}
