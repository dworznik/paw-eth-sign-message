import {registerDynamicValueClass, InputField} from './__mocks__/shims';
import EthSigner from "./EthSigner";

@registerDynamicValueClass
export default class EthSignMessage {
  static title = 'Ethereum Message Signature';
  static identifier = 'com.dworznik.PawExtensions.EthSignMessage';
  static help = 'https://github.com/dworznik/paw-eth-sign-message#readme';

  static inputs = [
    new InputField('key', 'Private Key', 'String'),
    new InputField('message', 'Message', 'String'),
    new InputField('prefix', '0x Prefix', 'Checkbox', {defaultValue: true})
  ];

  constructor() {
    this.context = null;
    this.key = null;
    this.message = null;
    this.prefix = null;
  }

  title(context) {
    this.context = context;
    return EthSignMessage.title;
  }

  evaluate(context) {
    this.context = context;

    if (context.runtimeInfo.task !== 'requestSend') {
      return '** digest is only generated during request send **'
    }

    const signer = new EthSigner(EthSigner.identifier, this.key);
    return signer.sign(this.message, this.prefix);
  }
}
