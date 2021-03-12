/* eslint-disable node/no-unpublished-import */
import '@babel/polyfill';
import 'isomorphic-fetch';

import RingCentral from '@rc-ex/core';
import RcSdkExtension from '@rc-ex/rcsdk';
import DebugExtension from '@rc-ex/debug';
import WebSocketExtension from '@rc-ex/ws';
import SDK from '@ringcentral/sdk';

const rc = new RingCentral();

(async () => {
  // @rc-ex/rcsdk
  const sdk = new SDK({
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
    server: process.env.RINGCENTRAL_SERVER_URL,
  });
  await sdk.login({
    username: process.env.RINGCENTRAL_USERNAME,
    extension: process.env.RINGCENTRAL_EXTENSION,
    password: process.env.RINGCENTRAL_PASSWORD,
  });
  const rcSdkExtension = new RcSdkExtension({
    rcSdk: sdk,
  });
  await rc.installExtension(rcSdkExtension);

  // @rc-ex/debug
  const debugExtension = new DebugExtension();
  await rc.installExtension(debugExtension);

  // @rc-ex/ws
  const webSocketExtension = new WebSocketExtension({
    restOverWebSocket: true,
  });
  await rc.installExtension(webSocketExtension);

  const r = await rc.restapi().account().extension().get();
  alert(JSON.stringify(r, null, 2));
})();
