import { FC } from 'react';
import { SECTIONS } from '../configuration/constants';

// Screens
import AccountStack from './AccountStack';
import FavouritesStack from './FavouritesStack';
import RestaurantsStack from './RestaurantsStack';
import SearchStack from './SearchStack';
import TopRestaurantsStack from './TopRestaurantsStack';

type TabSection = {
    id: string,
    iconName: string,
    componentView: FC
}

const SECTIONS_MODULES: { [key: string]: TabSection } = {
    restaurants: Object.assign({ componentView: RestaurantsStack }, SECTIONS.restaurants),
    top: Object.assign({ componentView: TopRestaurantsStack }, SECTIONS.top),
    favs: Object.assign({ componentView: FavouritesStack }, SECTIONS.favs),
    search: Object.assign({ componentView: SearchStack }, SECTIONS.search),
    account: Object.assign({ componentView: AccountStack }, SECTIONS.account)
};

export default SECTIONS_MODULES;