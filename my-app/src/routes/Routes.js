import Home from '../pages/login/Home';
import Category from '../pages/Category';
import DefaultLayout from '../layout/defaultLayout/DefaultLayout';
import Detail from '../pages/Detail';
import Contact from '../pages/Contact';
import Search from '../pages/Search';

export const publicRoutes = [
    { path: '/home', element: Home, layout: DefaultLayout },
    { path: '/', element: Home, layout: DefaultLayout },
    { path: '/category/*', element: Category, layout: DefaultLayout },
    { path: '/search/*', element: Search, layout: DefaultLayout },
    { path: '/detail/:id', element: Detail, layout: DefaultLayout },
    { path: '/contact', element: Contact, layout: DefaultLayout },
];
