class DataManager { // se encarga de desscargar solo los datos 
    constructor(appManager) {
        this.appManager = appManager;
        this.bees = [];
        this.posts = [];
        this.albunes = [];
        this.toDos = [];
        this.beesUrl = 'https://beehive-270a2.firebaseio.com/data/users.json';
        this.postsUrl = 'https://beehive-270a2.firebaseio.com/data/posts.json';
        this.commentsUrl = 'https://beehive-270a2.firebaseio.com/data/comments.json';
        this.albumsUrl = 'https://beehive-270a2.firebaseio.com/data/albums.json';
        this.photosUrl = 'https://beehive-270a2.firebaseio.com/data/photos.json';
        this.toDoUrl = 'https://beehive-270a2.firebaseio.com/data/todos.json';

    }

    start() {
        this.appManager.uiManager.showLoading();
        this.sendRequest(this.beesUrl, this.getBeesComplete.bind(this));
        //this.sendRequest(this.postsUrl, this.getPostsComplete.bind(this));
        //this.sendRequest(this.albumsUrl, this.getAlbumsComplete.bind(this));
        //this.sendRequest(this.photosUrl, this.getPhotosComplete.bind(this));
        //this.sendRequest(this.toDoUrl, this.getToDosComplete.bind(this));
    }

    sendRequest(url, callBack) {
        var request = new XMLHttpRequest();
        request.addEventListener('load', callBack);
        request.open('GET', url);
        request.send();
    }

    getBeesComplete(e) {
        var request = e.target;

        if (request.status === 200) {

            var data = JSON.parse(request.responseText);

            data.forEach(beeData => {
                var bee = new Bee(
                    beeData.name,
                    beeData.address,
                    beeData.phone,
                    beeData.username,
                    beeData.company,
                    beeData.email,
                    beeData.website,
                    beeData.image,
                    beeData.id,
                    beeData.owner
                    );

                    if(bee.owner) {
                        AppManager.getInstance().owner = bee;
                    }
                this.bees.push(bee);
            });
            this.sendRequest(this.postsUrl, this.getPostsComplete.bind(this));
        } else {
            console.log('Error on request');
        }
    }

    // Bee's posts
    getPostsComplete(e) {

        var request = e.target;

        if (request.status === 200) {

            var data = JSON.parse(request.responseText);

            for (let i = 0; i < data.length; i++) {
                this.postsData = data[i];
                var post = new Post(this.postsData.body, this.postsData.id, this.postsData.title, this.postsData.userId);
                this.posts.push(post);
                this.addPostToBee(post);
            }

            this.sendRequest(this.commentsUrl, this.getCommentsComplete.bind(this));

        } else {
            console.log('error');
        }
    }

    addPostToBee(post) {
        this.bees.forEach((bee) => {
            if (bee.id === post.userId) {
                bee.addPost(post);
                return;
            }
        });
    }

    // Post's comments
        // extraer comments del url

    getCommentsComplete(e) {
        var request = e.target;
        if (request.status === 200) {
            var data = JSON.parse(request.responseText);
            for (let i = 0; i < data.length; i++) {
                var commentData = data[i];
                var comment = new Comment(
                    commentData.body,
                    commentData.email,
                    commentData.id,
                    commentData.name,
                    commentData.postId   
                );
                this.addCommentToPost(comment);
            }
            this.sendRequest(this.albumsUrl, this.getAlbumsComplete.bind(this));
        } else {
            console.log('Error on request');
        }
    }

    addCommentToPost(comment) {
        this.posts.forEach((post) => {
          if (post.id === comment.postId) {
            post.addComment(comment);
          }
        });
    }

    // Bee's albums

    getAlbumsComplete(e) {
        var request = e.target;
        if (request.status === 200) {
            var data = JSON.parse(request.responseText);
            for (let i = 0; i < data.length; i++) {
                var albumData = data[i];
                var album = new Album(albumData.id, albumData.title, albumData.userId);
                this.albunes.push(album);
                this.addAlbumToBee(album);
            }
            this.sendRequest(this.photosUrl, this.getPhotosComplete.bind(this));
        } else {
            console.log('Error on request');
        }
    }

    addAlbumToBee(album) {

        this.bees.forEach(bee => {

            if (bee.id === album.userId) {
                bee.addAlbum(album);
            }
        });
    }

    // Album's photos

    getPhotosComplete(e) {
        var request = e.target;
        if (request.status === 200) {
            var data = JSON.parse(request.responseText);
            for (let i = 0; i < data.length; i++) {
                var photoData = data[i];
                var photo = new Photo(
                    photoData.albumId,
                    photoData.id,
                    photoData.thumbnailUrl,
                    photoData.title,
                    photoData.url
                );
                this.addPhotosToAlbum(photo);
            }
            this.sendRequest(this.toDoUrl, this.getToDosComplete.bind(this));
        } else {
            console.log('Error on request');
        }
    }

    addPhotosToAlbum(photo) {
        this.albunes.forEach(album => {
            if (album.id === photo.albumId) {
                album.addPhotos(photo);
            }
        });
    }

    // To Dos

    getToDosComplete(e) {
        var request = e.target;
        if (request.status === 200) {
            var data = JSON.parse(request.responseText);
            for (let i = 0; i < data.length; i++) {
                this.Data = data[i];
                var todo = new ToDo(
                    this.Data.completed, 
                    this.Data.id, 
                    this.Data.title, 
                    this.Data.userId
                );
                this.addToDosToBee(todo); 
            }
            console.log(this.bees);
            this.appManager.uiManager.showUI();
        } else {
            console.log('Error on request');
        }
    }

    addToDosToBee(todo) {

        this.bees.forEach(bee => {

            if (bee.id === todo.userId) {
                bee.addToDos(todo);
            }
        });
    }
}