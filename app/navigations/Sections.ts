import { FC } from 'react';
import { SECTIONS } from '../configuration/constants';

// Screens
import Account from '../screens/Account/Account';
import Login from '../screens/Account/Login';
import Register from '../screens/Account/Register';
import Favourites from '../screens/Favourites';
import Restaurants from '../screens/Restaurants';
import Search from '../screens/Search';
import TopRestaurants from '../screens/TopRestaurants';

export type SectionScreen = {
    id: string,
    header: string,
    screen: FC
}

export type TabSection = {
    id: string,
    iconName: string,
    screens: SectionScreen[]
}

const SECTIONS_MODULES: { [key: string]: TabSection } = {
    restaurants: Object.assign({
        screens: [
            { id: SECTIONS.restaurants.id, screen: Restaurants, header: `SECTIONS.${SECTIONS.restaurants.id}.TITLE` }
        ]
    }, SECTIONS.restaurants),
    top: Object.assign({
        screens: [
            { id: SECTIONS.top.id, screen: TopRestaurants, header: `SECTIONS.${SECTIONS.top.id}.TITLE` }
        ]
    }, SECTIONS.top),
    favs: Object.assign({
        screens: [
            { id: SECTIONS.favs.id, screen: Favourites, header: `SECTIONS.${SECTIONS.favs.id}.TITLE` }
        ]
    }, SECTIONS.favs),
    search: Object.assign({
        screens: [
            { id: SECTIONS.search.id, screen: Search, header: `SECTIONS.${SECTIONS.search.id}.TITLE` }
        ]
    }, SECTIONS.search),
    account: Object.assign({
        screens: [
            { id: SECTIONS.account.id, screen: Account, header: `SECTIONS.${SECTIONS.account.id}.TITLE` },
            { id: 'login', screen: Login, header: 'account.login.TITLE' },
            { id: 'register', screen: Register, header: 'account.register.TITLE' }
        ]
    }, SECTIONS.account)
};

export default SECTIONS_MODULES;