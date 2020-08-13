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

      this.titleCol = document.createElement('div');
      this.titleCol.classList.add('PostTitleCol');
      this.container.appendChild(this.titleCol);
 
      this.leftcol = document.createElement('div');
      this.leftcol.classList.add('leftcol');
      this.titleCol.appendChild(this.leftcol);
 
      this.rightcol = document.createElement('div');
      this.rightcol.classList.add('rightcol');
      this.titleCol.appendChild(this.rightcol);
 
      var h2 = document.createElement("p");
      h2.innerHTML = "<b>Bee's Posts</b>"
      h2.classList.add("h2");
      this.leftcol.appendChild(h2);
 
      var addPostBtn = document.createElement('button');
      addPostBtn.innerHTML = 'Add';
      //addPostBtn.onclick = this.onAddPostClick.bind(this);
      addPostBtn.classList.add("addPostBtn");
      this.rightcol.appendChild(addPostBtn);

      bee.posts.forEach((post) => {
          var postComponent = new PostComponent(this.container, post);
      })
  }
}