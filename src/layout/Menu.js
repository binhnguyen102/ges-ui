import * as React from 'react';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { useMediaQuery } from '@material-ui/core';
import { useTranslate, MenuItemLink } from 'react-admin';

// ICON
import CardGiftCardIcon from '@material-ui/icons/CardGiftcard';
import ListIcon from '@material-ui/icons/List';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
const Menu = ({ onMenuClick, dense, logout }) => {
    // const { permissions } = usePermissions();

    // const [state, setState] = useState({
    //     menuGiftManagement: false,
    // });

    const translate = useTranslate();
    // const isXSmall = useMediaQuery((theme) =>
    //     theme.breakpoints.down('xs')
    // );
    const open = useSelector((state) => state.admin.ui.sidebarOpen);
    useSelector((state) => state.theme); // force rerender on theme change

    // const handleToggle = (menu) => {
    //     setState(state => ({ ...state, [menu]: !state[menu] }));
    // };

    return (
        <div>
            {' '}
            {/* ADMIN MENU */}
            <MenuItemLink
                to="/gm/admin/gifts"
                primaryText={translate(`pos.menu.admin.ges.children.gift`, {
                    smart_count: 2,
                })}
                leftIcon={<ListIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
                
            />
            <MenuItemLink
                to={`/gm/admin/rates`}
                primaryText={translate(`pos.menu.admin.ges.children.rate`, {
                    smart_count: 2,
                })}
                leftIcon={<CardGiftCardIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
                <MenuItemLink
                to={`/gm/admin/transaction`}
                primaryText={translate(`pos.menu.admin.ges.children.transaction`, {
                    smart_count: 2,
                })}
                leftIcon={<AppSettingsAltIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            {/* {isXSmall && logout} */}
        </div>
    );
};

export default Menu;
