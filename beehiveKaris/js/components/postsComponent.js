class PostsComponent extends Component {
  constructor(parent) {
    super(parent);
    this.container.id = "postsComponent";
    this.container.classList.add("postsComponent");
    this.bee = null;
  }

  showBeePosts(bee, resetPosition){
      // console.log(bee);
      if(resetPosition) {
          this.container.scrollTo(0, 0);
      }
      this.container.innerHTML = '';

      bee.posts.forEach((post) => {
          var postComponent = new PostComponent(this.container, post);
      })
  }
}