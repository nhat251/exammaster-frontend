import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from '~/components/GlobalStyles';
import { publicRoutes, privateRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import { Fragment } from 'react';

function App() {
  return (
    <>
      <Router>
        <GlobalStyles>
          <Routes>
            {/* public route */}
            {publicRoutes.map((r, index) => {
              const Page = r.component;
              let Layout = DefaultLayout;
              if (r.layout) {
                Layout = r.layout;
              } else if (r.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={r.path}
                  element={
                    <Layout>
                      <Page></Page>
                    </Layout>
                  }
                />
              );
            })}

            {/* private route */}
            {privateRoutes.map((r, index) => {
              const Page = r.component;
              let Layout = DefaultLayout;
              if (r.layout) {
                Layout = r.layout;
              } else if (r.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={r.path}
                  element={
                    <PrivateRoute>
                      <Layout>
                        <Page />
                      </Layout>
                    </PrivateRoute>
                  }
                />
              );
            })}
          </Routes>
        </GlobalStyles>
      </Router>
    </>
  );
}

export default App;
