<style>
    @import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        border: none;
        font-size: 1rem;
        font-family: 'Bruno Ace SC', sans-serif;
    }

    .header-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        .button-wrapper {
            padding: .3rem .7rem;
            font-size: 1.5rem;
            background: rgba(0, 0, 0, 0.2);
            color: rgb(165, 5, 66);
            transition: background .3s;

            &:hover {
                background: rgba(var(--accent-rgb), .2);
            }
        }
    }

    .img-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

<div class="header-wrapper">
<h2>Tic-tac-toe</h2>

[<button class="button-wrapper">Play</button>](https://matiss-norenbergs.github.io/tic-tac-toe/)
</div>

- Simple game of tic-tac-toe for two players, made in React
- Later on might add the functionality of playing against the "computer"

<div class="img-wrapper">
<img src="https://github.com/matiss-norenbergs/tic-tac-toe/blob/main/public/thumb.png" alt="Screenshot" width="90%" />
</div>