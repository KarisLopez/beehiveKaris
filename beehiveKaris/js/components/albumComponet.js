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
      bee.albumss.forEach((album) => {
        album.photos.forEach((photo) => {
          var photoComponent = new ThumbnailComponent(this.container, photo);
        })
      })
    }
  }