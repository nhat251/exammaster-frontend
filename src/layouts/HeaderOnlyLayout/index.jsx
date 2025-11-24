import { Header } from '~/layouts/components';

function HeaderOnlyLayout({ children }) {
  return (
    <>
      <Header></Header>
      HeaderOnly
      <div className="body-inner">{children}</div>
    </>
  );
}

export default HeaderOnlyLayout;
