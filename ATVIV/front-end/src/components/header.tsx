export default function Header() {
    return (
        <header>
            <style>
                {`
                    header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 20px;
                        background-color: #333;
                        color: white;
                    }
                    nav {
                        display: flex;
                        gap: 20px;
                    }
                    a {
                        color: white;
                        text-decoration: none;
                    }
                    a:hover {
                        text-decoration: underline;
                    }
                `}
            </style>
            <h1>WB</h1>
            <nav>
                    <a href="/cadastrar">Cadastrar</a>
                    <a href="/clientes">Clientes</a>
            </nav>
        </header>
    );
}