import engine from 'socket.io-client';

const config = {
  path:"/v1/vote",
  reconnection: true,
  reconnectionAttempts: Infinity,
  reconnectionDelay: 100,
  reconnectionDelayMax: 1000,
  randomizationFactor: 0.5,
  timeout: 2000,
  autoConnect: true,
  query: {},
  // options of the Engine.IO client
  forceNew: true,
  upgrade: true,
  forceJSONP: false,
  jsonp: true,
  forceBase64: false,
  enablesXDR: false,
  timestampRequests: true,
  timestampParam: 't',
  policyPort: 843,
  transports: ['polling','websocket'],
  transportOptions: {},
  rememberUpgrade: false,
  onlyBinaryUpgrades: false,
  requestTimeout: 0,
  protocols: [],
  // options for Node.js
  agent: false,
  pfx: null,
  key: null,
  passphrase: null,
  cert: null,
  ca: null,
  ciphers: [],
  rejectUnauthorized: true,
  perMessageDeflate: true,
  forceNode: false,
  localAddress: null,
  // options for Node.js / React Native
  extraHeaders: {},  
}

class Socket {

  con(server = new String()){
    const io = engine(server, config);
    return io;
  }

}

export default Socket;