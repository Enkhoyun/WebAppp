class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');
                @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Pangolin&family=Istok+Web:ital,wght@0,400;0,700;1,400;1,700&family=Lexend+Zetta:wght@100..900&family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&display=swap');

                :host {
                    display: block;
                    width: 100%;
                }

                :root {
                    --font-header: "Semi-bold";
                    --font-answer: "Pangolin", cursive;
                    --font-addDescription: "Istok Web", sans-serif;
                    --color-foodname: #F7D8A5;
                    --color-text-light: #0000;
                    --color-text-dark: #fff;
                    --color-background-light: #fff;
                    --color-background-dark: #000;
                }

                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }

                a {
                    text-decoration: none;
                }

                .head {
                    width: 100%;
                    max-width: 1440px;
                    margin: 0;
                    background-color: var(--color-background-light);
                    color: var(--color-text-light);
                }

                .navigation {
                    display: flex;
                    flex-direction: row;
                    list-style: none;
                    justify-content: space-evenly;
                    font-size: 20px;
                    font-family: var(--font-header);
                }

                .fa-user {
                    font-size: 20px;
                }

                .navigation img {
                    width: 40px;
                    height: 40px;
                }

                .navigation a {
                    display: flex;
                    flex-direction: row;
                    gap: 1rem;
                    color: var(--color-text-light);
                }

                .fa-bookmark {
                    position: relative;
                }

                .quantity {
                    font-size: 8px;
                    background-color: red;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    position: absolute;
                    top: 2px;
                    right: 25%;
                    padding: 3px 5px;
                }

                .search-bar {
                    position: relative;
                }

                .search {
                    width: 100%;
                    max-width: 280px;
                    height: 25px;
                    border: 1px solid var(--color-text-light);
                    border-radius: 20px;
                }

                .search::placeholder {
                    text-align: center;
                    color: var(--color-text-light);
                }

                .fa-magnifying-glass {
                    font-size: 15px;
                    position: absolute;
                    right: 0;
                    margin-top: 6px;
                    margin-right: 5px;
                    color: var(--color-text-light);
                }

                .navigation li:not(:first-child) {
                    margin-top: 10px;
                }

                @media (max-width: 500px) {
                    .navigation li a p {
                        display: none;
                    }
                }

                @media (prefers-color-scheme: dark) {
                    .head {
                        background-color: var(--color-background-dark);
                        color: var(--color-text-dark);
                    }
                    
                    .navigation a {
                        color: var(--color-text-dark);
                    }
                    
                    .search {
                        border: 1px solid var(--color-text-dark);
                    }
                    
                    .search::placeholder {
                        color: var(--color-text-dark);
                    }

                    .fa-magnifying-glass {
                        color: var(--color-text-dark);
                    }
                }
            </style>
            <header class="head">
                <ul class="navigation">
                    <li><a href="index.html"><img src="/assets/logo.jpeg" alt="Logo" class="logo"></a></li>
                    <li><a href="choosenfood.html" class="choosenfood">Хоол сонгох</a></li>
                    <li><a href="choosenentrance.html" class="choosenetrance">Орц сонгох</a></li>
                    <li class="search-bar">
                        <input type="text" id="search" placeholder="Search" class="search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </li>
                    <li><i class="fa-regular fa-bookmark"><span class="quantity">0</span></i></li>
                    <li><a href="login.html" class="login"><i class="fa-solid fa-user"></i><p>Нэвтрэх</p></a></li>
                </ul>
            </header>
        `;
    }
}

customElements.define("my-header", Header);
