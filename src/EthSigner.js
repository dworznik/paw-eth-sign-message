import {toBuffer, hashPersonalMessage, ecsign, toRpcSig} from 'ethereumjs-util';

export default class EthSigner {
  constructor(identifier, key) {
    this.pk = toBuffer(key.substring(0, 2) !== '0x' ? `0x${key}` : key);
    this.identifier = identifier;
  }

  sign(message, prefix) {
    if (!this.pk || !message) return;
    const hash = hashPersonalMessage(Buffer.from(message));
    const sig = ecsign(hash, this.pk);
    const rpcSig = toRpcSig(sig.v, sig.r, sig.s);
    return prefix ? rpcSig : rpcSig.substring(2);
  }
}
