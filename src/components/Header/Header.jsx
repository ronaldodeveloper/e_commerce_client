
import './header.scss';
import { Search }from '../Search/Seach';
import { MdShoppingCart } from 'react-icons/md';
import { RiErrorWarningFill } from 'react-icons/ri';

export const Header=()=>{

    return(
      <>
        <header className='header'>
          <div className='header_content container'>
          <div className='header_content_box item-center'>
            <MdShoppingCart className="logo"/>
           <Search />  
            <div className="admin"> 
              <a href="#">entrar</a>
              <a href="#">cadastrar</a>
            </div> 
          </div> 
          <nav className="navbar">
            <ul className='menu'>
              <li className='menu_item'>categorias
                <ul>
                  <li className="subCategoria">item 1</li>
                  <li className="subCategoria">item 2</li>
                  <li className="subCategoria">item 3</li>
                </ul>
              </li>
              <li>ofertas</li>
              <li>contato</li>
            </ul>
            <div className="menu_icon">
            <a href="#" className="link"><MdShoppingCart className="icone-avisos"/></a>
            <a href="#" className="link"><RiErrorWarningFill /></a>
            </div>
          </nav> 
          </div>
        </header>
      </>
    )
}