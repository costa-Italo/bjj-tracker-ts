import Logo from "../../assets/bjj-logo.jpg"

const Header = () => {
    return (
        <header className="flex flex-row justify-center items-center mt-5 gap-2">
            <img src={Logo} className="w-10 rounded-2xl"/>
            <h1 className="text-gray-100">Equipe Eisler Cardoso Brazilian Jiu Jitsu</h1>
        </header>
    )
}

export default Header;