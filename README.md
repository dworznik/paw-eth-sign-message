# Paw-Eth-Sign-Message

[Paw](http://paw.cloud) dynamic value extension using [ethereumjs-util](https://github.com/ethereumjs/ethereumjs-util) to [sign](https://github.com/ethereumjs/ethereumjs-util/blob/master/docs/modules/_signature_.md#const-ecsign) messages to be sent in HTTP requests.

## Installation

To build and install from source, clone the repository and run the following commands.

```bash
$ git clone https://github.com/dworznik/paw-eth-sign-message.git
$ cd paw-eth-sign-message
$ NODE_ENV=production make install
```

Alternatively, download the latest build from the [releases page](https://github.com/dworznik/paw-eth-sign-message/releases), and extract it to [Paw extensions directory](https://paw.cloud/docs/extensions/index#extension-folder).


## Usage

Insert the dynamic value from the right-click menu: Extensions -> Ethereum Message Signature.
Provide your private key in hex format and a message to be [hashed](https://github.com/ethereumjs/ethereumjs-util/blob/master/docs/modules/_signature_.md#const-hashpersonalmessage) and [signed](https://github.com/ethereumjs/ethereumjs-util/blob/master/docs/modules/_signature_.md#const-ecsign).
You can choose whether the signature is prefixed with "0x" by checking the "0x Prefix" checkbox.

## License

https://dworznik.mit-license.org
