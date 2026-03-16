import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../contexts/ThemeContext';
import Button from './Button';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  const handleLanguageToggle = () => {
    const newLang = i18n.language.startsWith('en') ? 'vi' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { to: '/datasets', label: t('nav.datasets') },
    { to: '/training', label: t('nav.training') },
    { to: '/generation', label: t('nav.generation') },
    { to: '/evaluation', label: t('nav.evaluation') },
    { to: '/documentation', label: t('nav.documentation') },
  ];

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-900/10 dark:border-slate-50/10 px-4 py-4 md:px-6">
      <Link to="/" className="flex items-center gap-3">
        <div className="text-primary size-7">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
            <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
          </svg>
        </div>
        <h2 className="text-text-light dark:text-text-dark text-xl font-black tracking-widest">{t('header.logo')}</h2>
      </Link>
      <nav className="hidden items-center gap-8 md:flex">
        {navLinks.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? 'text-sm font-medium text-primary hover:opacity-80'
                : 'text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <Button onClick={handleLanguageToggle} variant="outline" className="w-10 h-10 font-bold dark:border-slate-700">
          {i18n.language.startsWith('vi') ? 'VI' : 'EN'}
        </Button>
        <Button onClick={toggleTheme} variant="icon" className="w-10 h-10">
          <span className="material-symbols-outlined">
            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
          </span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
