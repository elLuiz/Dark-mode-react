import React, { useContext } from 'react';
import Theme from '../../Context/Theme';
import '../../Styles/Components/Nav/nav.css'
import Links from './Links';
import Logo from './Logo';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
export default function Nav() {
    const theme = useContext(Theme);
    return (
        <nav className={theme.theme === 'light' ? 'nav': 'nav nav-dark'}>
            <Logo />
            <Links />
            <ToggleSwitch />
        </nav>
    )
}
