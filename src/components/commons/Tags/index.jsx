import classNames from 'classnames/bind';
import styles from './Tags.module.scss';

import React from 'react';

import Tag from './Tag';

const cx = classNames.bind(styles);
function Tags({ tags }) {
  const visibleTags = tags.slice(0, 2);
  const remainingCount = tags.length - visibleTags.length;

  return (
    <>
      <div className={cx('wrapper')}>
        {visibleTags.map((tag) => (
          <Tag key={tag.tagId} tagString={tag.tagString} />
        ))}
        {remainingCount > 0 && <Tag tagString={`+${remainingCount}`} isMore />}
      </div>
    </>
  );
}

export default Tags;
