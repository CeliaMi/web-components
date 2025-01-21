class UserCard extends HTMLElement{
    constructor(){
        super()
        const name = this.getAttribute('name');
        const html = `<article class="card-profile">
                            <img src="https://avatars.githubusercontent.com/${name}?size=128" alt="Github Profile pic ${name}">
                            <span>${name}</span>
                    </article>`
                    this.insertAdjacentHTML('beforeEnd', html)
    }
}

customElements.define('user-card', UserCard)