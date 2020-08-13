class AlbumComponent extends Component {
    constructor(parent, model) {
      super(parent);
      this.container.id = "albumComponent";
      this.container.classList.add("albumComponent");
      this.model = model;
    }
  
    showBeePhotos(bee, resetPosition) {
      // console.log(bee);
      if (resetPosition) {
        this.container.scrollTo(0, 0);
      }
  
      this.container.innerHTML = '';  
      this.addInitialSpace();

      this.titleCol = document.createElement('div');
      this.titleCol.classList.add('AlbumTitleCol');
      this.container.appendChild(this.titleCol);
      var h2 = document.createElement("p");
      h2.innerHTML = "<b>Bee's Albums</b>"
      h2.classList.add("h2");
      this.titleCol.appendChild(h2);
      
      bee.albumss.forEach((album) => {
        album.photos.forEach((photo) => {
          var photoComponent = new ThumbnailComponent(this.container, photo);
        })
      })
    }
  }