class HeaderComponent extends Component{
    constructor(parent){
        super(parent);
        this.container.id = 'HeaderComponent';
        this.container.classList.add('HeaderComponent');

        var headerTitle = document.createElement("h1");
        headerTitle.innerHTML = "The Beehive";
        headerTitle.classList.add("headerTitle");
        this.container.appendChild(headerTitle);
    }
}