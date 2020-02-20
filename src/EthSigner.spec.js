import {assert} from 'chai';
import {describe, it} from 'mocha';

import EthSigner from '../src/EthSigner';


describe('EthSigner', () => {

  it('Returns a signature', () => {
    const signer = new EthSigner('com.dworznik.test', '0x4137d4dababb963d3c8c823f34a461b621b89964a39775fb7ad7640bf304a329');

    const result = signer.sign('test', false);
    assert.isNotNull(result);
    const buf = Buffer.from(result, 'hex');
    assert.lengthOf(buf, 65);
  });

  it('Returns a prefixed signature', () => {
    const signer = new EthSigner('com.dworznik.test', '0x4137d4dababb963d3c8c823f34a461b621b89964a39775fb7ad7640bf304a329');

    const result = signer.sign('test', true);
    assert.isNotNull(result);
    assert.equal(result.substring(0, 2), '0x');
    const buf = Buffer.from(result.substring(2), 'hex');
    assert.lengthOf(buf, 65);
  });

});
