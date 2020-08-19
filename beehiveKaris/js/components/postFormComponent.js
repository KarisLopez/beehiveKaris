class PostFormComponent extends Component {
    constructor(parent) {
        super(parent);
        this.container.classList.add('commentFormComponent');

        this.formBackground = document.createElement('div');
        this.container.appendChild(this.formBackground);
        this.formBackground.classList.add('formBackground');

        this.header = document.createElement('h3');
        this.header.innerHTML = 'New Post';
        this.header.classList.add('comment-header');
        this.formBackground.appendChild(this.header);

        this.label = document.createElement('p');
        this.label.innerHTML = 'Title';
        this.label.classList.add('comment-label');
        this.formBackground.appendChild(this.label);

        this.title = document.createElement('input');
        this.title.placeholder = 'Enter your title here.';
        this.title.classList.add('comment-title');
        this.formBackground.appendChild(this.title);

        this.label = document.createElement('p');
        this.label.innerHTML = 'Body';
        this.label.classList.add('comment-label');
        this.formBackground.appendChild(this.label);

        this.body = document.createElement('textarea');
        this.body.placeholder = 'Enter the body for your post here.';
        this.body.classList.add('comment-body');
        this.formBackground.appendChild(this.body);

        this.buttonsContainer = document.createElement('div');
        this.buttonsContainer.classList.add('buttonsContainer');
        this.formBackground.appendChild(this.buttonsContainer);

        this.cancelBtn = document.createElement('button');
        this.cancelBtn.innerHTML = 'Cancel';
        this.cancelBtn.classList.add('cancelBtn');
        this.cancelBtn.onclick = this.onCancelBtn.bind(this);
        this.buttonsContainer.appendChild(this.cancelBtn);

        this.okBtn = document.createElement('button');
        this.okBtn.innerHTML = 'OK';
        this.okBtn.onclick = this.onOkBtn.bind(this);
        this.okBtn.classList.add('okBtn');
        this.buttonsContainer.appendChild(this.okBtn);

        this.hide();
    }

    hide() {
        this.container.style.display = 'none';
    }

    show() {
        this.container.style.display = 'flex';
    }

    onCancelBtn(e) {
        AppManager.getInstance().uiManager.hidePostForm(null, null);
    }

    onOkBtn(e) {
        var title = this.title.value;
        var body = this.body.value;

        AppManager.getInstance().uiManager.addNewPost(title, body);
    }
}
