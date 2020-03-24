# Dumb AES

### Simple but insecure AES implementation.

Implementation of AES as used by https://aesencryption.net.

Derived from [this Python gist](https://gist.github.com/tryone144/db389557bc2ad45bba3522cd0f01cebb) by [tryone144](https://github.com/tryone144).

The implementation uses a low-entropy and static initialization vector (IV), and also pads low-entropy keys with null bytes `\0`.

**Don't use this to store anything you care about.**

### Implementation Details

* Shortcode: AES-256-CBC
* Key size: 32 bytes (zero-byte padded)
* Mode: CBC
* IV: `12345678b0z2345n` (UTF-8 string)
* Input: UTF-8 (plaintext or Base64)
* Output: UTF-8 (plaintext or Base64)
