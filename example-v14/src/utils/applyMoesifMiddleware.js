import moesif from 'moesif-nodejs';

const moesifOptions = {
  applicationId: 'Your Moesif Application Id',
  logBody: true,
  isNextJsAppRouter: true,
  debug: true,
}

const applyMoesifMiddleware = moesif(moesifOptions);

export default applyMoesifMiddleware;
