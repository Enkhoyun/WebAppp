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

                :root {
                    --font-header: "Semi-bold";
                    --font-answer: "Pangolin", cursive;
                    --font-addDescription: "Istok Web", sans-serif;
                    --color-foodname: #F7D8A5;
                }

                body {
                    display: grid;
                    grid-template-columns: auto;
                    grid-template-rows: auto;
                    grid-template-areas: "head" "main" "footer";
                    max-width: 1440px;
                    min-width: 375px;
                    margin: 0;
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
                    grid-area: head;
                    margin: 0;
                }

                .head .navigation {
                    display: flex;
                    flex-direction: row;
                    list-style: none;
                    justify-content: space-evenly;
                    font-size: 20px;
                    font-family: var(--font-header);
                }

                .head .navigation .fa-user {
                    font-size: 20px;
                }

                .head .navigation img {
                    width: 40px;
                    height: 40px;
                }

                .head .navigation a {
                    display: flex;
                    flex-direction: row;
                    gap: 1rem;
                    color: black;
                }

                .fa-regular .fa-bookmark {
                    position: relative;
                }

               .quantity{
                font-size:8px;
                    background-color: red;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    position: absolute;
                    top:2px;
                    right:25%;
                    padding: 3px 5px;
                }

                .search-bar {
                    position: relative;
                }

                .search {
                    width: 100%;
                    max-width: 280px;
                    height: 25px;
                    border: 1px solid black;
                    border-radius: 20px;
                }

                .search-bar ::placeholder {
                    text-align: center;
                }

                .fa-magnifying-glass {
                    font-size: 15px;
                    position: absolute;
                    right: 0;
                    margin-top: 6px;
                    margin-right: 5px;
                }

                .navigation li:not(:first-child) {
                    margin-top: 10px;
                }

                @media (max-width: 500px) {
                    .head .navigation li a p {
                        display: none;
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
