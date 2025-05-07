import React from 'react'
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from 'react-icons/bs'
import './Sidebar.css' // Import the CSS file

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside
      id='sidebar'
      className={openSidebarToggle ? 'sidebar-responsive' : ''}
    >
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header' /> SHOP
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <button>
            <BsGrid1X2Fill className='icon' /> Dashboard
          </button>
        </li>
        <li className='sidebar-list-item'>
          <button>
            <BsFillArchiveFill className='icon' /> Products
          </button>
        </li>
        <li className='sidebar-list-item'>
          <button>
            <BsFillGrid3X3GapFill className='icon' /> Categories
          </button>
        </li>
        <li className='sidebar-list-item'>
          <button>
            <BsPeopleFill className='icon' /> Customers
          </button>
        </li>
        <li className='sidebar-list-item'>
          <button>
            <BsListCheck className='icon' /> Inventory
          </button>
        </li>
        <li className='sidebar-list-item'>
          <button>
            <BsMenuButtonWideFill className='icon' /> Reports
          </button>
        </li>
        <li className='sidebar-list-item'>
          <button>
            <BsFillGearFill className='icon' /> Settings
          </button>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
