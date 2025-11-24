import React from 'react';
import classNames from 'classnames/bind';
import { Search } from 'lucide-react';
import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);

function SearchBar() {
  return (
    <div className={cx('wrapper')}>
      <label htmlFor="search-input-id" className={cx('search-icon-wrapper')}>
        <Search className={cx('search-icon')} />
      </label>
      <input id="search-input-id" className={cx('search-input')} type="text" placeholder="Search exams..." />
    </div>
  );
}

export default SearchBar;
