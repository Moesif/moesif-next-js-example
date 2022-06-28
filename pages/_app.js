import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    // you can only import moesif-browser-js on the client side.
    import('moesif-browser-js').then((moesif) => {
      moesif.init({
        applicationId: 'You Application Id'
      });
      // this below assigns moesif object to the global window space, so you can trigger window.moesif in other places without having to init it again.
      window.moesif = moesif;
    });
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
