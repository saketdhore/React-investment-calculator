import investmentLogo from '../assets/investment-calculator-logo.png';
const Header = () => {
    return (
        <header id="header">
            <img src={investmentLogo} alt="Investment Logo" />
            <h1>Investment Calculator</h1>
        </header>
    )
}

export default Header;