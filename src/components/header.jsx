import Logo from '../components/logo';
import Nav from '../components/nav';

const Header = () => {
    return (
      <header className="w-full pt-[20px] h-[116px] absolute z-10">
        <div className="container-fluid flex flex-row justify-center items-center gap-[180px]">
        <a href="/" title="inmobirenders"><Logo /></a>
        <Nav />
        </div>
      </header>
    );
  };
  
  export default Header;