import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';
import { usePermissions, useTranslate, MenuItemLink } from 'react-admin';
import SubMenu from './SubMenu';

// ICON
import CardGiftCardIcon from '@material-ui/icons/CardGiftcard';
import HistoryIcon from '@material-ui/icons/History';
import ListIcon from '@material-ui/icons/List';


const Menu = ({ onMenuClick, dense, logout }) => {
    const { permissions } = usePermissions();

    const [state, setState] = useState({
        menuGiftManagement: false,
    });

    const translate = useTranslate();
    const isXSmall = useMediaQuery((theme) =>
        theme.breakpoints.down('xs')
    );
    const open = useSelector((state) => state.admin.ui.sidebarOpen);
    useSelector((state) => state.theme); // force rerender on theme change

    const handleToggle = (menu) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <div>
            {' '}
            {/* ADMIN MENU */}
            <SubMenu
                        handleToggle={() => handleToggle('menuGiftManagement')}
                        isOpen={state.menuGiftManagement}
                        sidebarIsOpen={open}
                        icon={<CardGiftCardIcon />}
                        name="pos.menu.admin.ges.title"
                        dense={dense}
                    >
                        <MenuItemLink
                            to="/getGifts"
                            primaryText={translate(`pos.menu.admin.ges.children.gift`, {
                                smart_count: 2,
                            })}
                            leftIcon={<ListIcon />}
                            onClick={onMenuClick}
                            sidebarIsOpen={open}
                            dense={dense}
                        />
                            <MenuItemLink
                            to={`/history`}
                            primaryText={translate(`pos.menu.admin.ges.children.history`, {
                                smart_count: 2,
                            })}
                            leftIcon={<HistoryIcon />}
                            onClick={onMenuClick}
                            sidebarIsOpen={open}
                            dense={dense}
                        />
                           <MenuItemLink
                            to={`/rates`}
                            primaryText={translate(`pos.menu.admin.ges.children.rate`, {
                                smart_count: 2,
                            })}
                            leftIcon={<CardGiftCardIcon />}
                            onClick={onMenuClick}
                            sidebarIsOpen={open}
                            dense={dense}
                        />
                    
                    </SubMenu>
            {isXSmall && logout}
        </div>
    );
};

export default Menu;
