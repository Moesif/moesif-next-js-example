import { useEffect } from 'react';

// option 1.
// use a separate file to manage userTracking
import globalMoesif from '../common/userTracking';

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   // option 2: useEffect or componentDidMount will ensure it only runs on client side.
  //   import('moesif-browser-js').then((moesif) => {
  //     moesif.init({
  //       applicationId: 'You Application Id'
  //     });
  //     // this below assigns moesif object to the global window space, so you can trigger window.moesif in other places without having to init it again.
  //     window.moesif = moesif;

  //     // then anywhere you can start to track user actions using the window.moesif object
  //     window.moesif.track('viewed-landing-page', { foo: 'hello' });

  //     // or when you have user info like when user loges in:
  //     // window.moesif.identifyUser('theirUserId', { email: 'blah@nowhere.com', first_name: 'John' });
  //   });
  // }, []);
  return <Component {...pageProps} />
}

export default MyApp
