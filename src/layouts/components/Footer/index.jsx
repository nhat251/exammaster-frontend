import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import { LogoApp } from '~/components/commons';
import { FOOTER_TAG_LINE, COPY_RIGHT } from '~/constants/my_const';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('footer-inner')}>
        <div className={cx('footer-top')}>
          <div className={cx('footer-item')}>
            <div className={cx('title')}>
              <LogoApp minimal />
            </div>
            <p>{FOOTER_TAG_LINE}</p>
          </div>
          <div className={cx('footer-item')}>
            <div className={cx('title')}>
              <p>Nổi bật</p>
            </div>
            <ul>
              <li>
                <p>Làm bài nhóm</p>
              </li>
              <li>
                <p>Chế độ thi đấu</p>
              </li>
              <li>
                <p>AI ra đề</p>
              </li>
              <li>
                <p>Đóng góp đề thi</p>
              </li>
            </ul>
          </div>

          <div className={cx('footer-item')}>
            <div className={cx('title')}>
              <p>Hỗ trợ</p>
            </div>
            <ul>
              <li>
                <p>Trung tâm hỗ trợ</p>
              </li>
              <li>
                <p>Liên lạc với chúng tôi</p>
              </li>
              <li>
                <p>Chính sách bảo mật</p>
              </li>
              <li>
                <p>Điều khoản người dùng</p>
              </li>
            </ul>
          </div>

          <div className={cx('footer-item')}>
            <div className={cx('title')}>
              <p>Kết nối</p>
            </div>
            <div className={cx('social-container')}>
              <a href="https://facebook.com/nhat251" target="_blank">
                <div className={cx('social-logo')}>
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
              </a>
              <a href="https://facebook.com/nhat251" target="_blank">
                <div className={cx('social-logo')}>
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </a>
              <a href="https://facebook.com/nhat251" target="_blank">
                <div className={cx('social-logo')}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
              </a>
            </div>
          </div>
        </div>
        <hr className={cx('spacer')} />
        <div className={cx('footer-bottom')}>
          <p>{COPY_RIGHT}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
