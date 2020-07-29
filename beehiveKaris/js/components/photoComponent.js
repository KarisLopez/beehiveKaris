class PhotoComponent extends Component {
    constructor(parent) {
        super(parent);
        this.container.classList.add('photoComponent');

        this.img = null;

        this.okBtn = document.createElement('button');
        this.okBtn.innerHTML = 'OK';
        this.okBtn.onclick = this.onOkBtn.bind(this);
        this.okBtn.classList.add('photoComponent-okBtn');
        this.container.appendChild(this.okBtn);

        this.hide();
    }

    showImage(photo) {
        this.container.innerHTML = '';
        this.img = document.createElement('img');
        this.img.src = photo.url;
        this.img.classList.add('photo');
        this.container.appendChild(this.img);
        this.container.appendChild(this.okBtn);
        this.show();
    }

    hide() {
        this.container.innerHTML = '';
        this.container.style.display = 'none';
    }

    show() {
        this.container.style.display = 'flex';
    }

    onOkBtn(e) {
        this.hide();
    }
}
