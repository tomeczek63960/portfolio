import Head from "./Head"
import Header from 'src/ui/Header/Header';
import HeaderMobile from 'src/ui/Header/HeaderMobile';
import { FormattedMessage, useIntl } from "react-intl";
import FooterComponent from "src/ui/Footer/Footer";

const Layout = (props: any) => {
  return (
    <>
      <Head { ...props } />
      <HeaderMobile />
      <div className="container">
        <div className="container__left">
          {/* <h1> <FormattedMessage id="page.home.description" /> </h1> */}
          <main>
            { props.children }
          </main>
        </div>
        <div className="container__right">
          <Header />
        </div>
      </div>
      <FooterComponent />
    </>
  )
}

export default Layout
