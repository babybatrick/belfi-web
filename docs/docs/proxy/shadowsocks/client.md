# ShadowSocks `client` file

This section explains how the ShadowSocks `client` file works.

`client` is the URL file for the client for the ShadowSocks protocol.

## Used by

List of the files and commands this file is used by:

- [`compose.yaml`](../../compose-yaml)

## Depends on 

List of the files this file depends on:

- [`.env`](../../environment)
- [`build`](../../build) (via [`scripts/config.sh`](../../scripts/config-sh) via [`scripts/subscripts/client/shadowsocks.sh`](../../scripts/subscripts/client/shadowsocks-sh))
- [`scripts/config.sh`](../../scripts/config-sh) (via [`scripts/subscripts/client/shadowsocks.sh`](../../scripts/subscripts/client/shadowsocks-sh))
- [`scripts/subscripts/client/shadowsocks.sh`](../../scripts/subscripts/client/shadowsocks-sh)

## File Content

The file has the following unexpanded content:

```url
ss://$(echo -n chacha20-ietf-poly1305:$PASSWORD | base64 -w 0)@$DOMAIN:453?&tfo=1
```