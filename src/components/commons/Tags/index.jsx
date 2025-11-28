import classNames from 'classnames/bind';
import styles from './Tags.module.scss';

import React from 'react';

import Tag from './Tag';

const cx = classNames.bind(styles);

function Tags({ tags, prefix, maxVisible }) {
  const visibleTags = tags.slice(0, maxVisible);
  const remainingCount = tags.length - visibleTags.length;

  return (
    <>
      <div className={cx('wrapper')}>
        {visibleTags.map((tag) => {
          let name = tag.name;
          if (prefix) {
            name = `${prefix}${name}`;
          }
          return <Tag key={tag.id} name={name} />;
        })}
        {remainingCount > 0 && <Tag name={`+${remainingCount}`} isMore />}
      </div>
    </>
  );
}

export default Tags;
