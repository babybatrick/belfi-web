# ShadowSocks `config.json` file

This section explains how the ShadowSocks `config.json` file works.

`config.json` is the core configuration file of the ShadowSocks protocol. It defines how the proxy server shall behave and proxy the traffic.

## Used by

List of the files and commands this file is used by:

- [`compose.yaml`](../../compose-yaml)

## Depends on 

List of the files this file depends on:

- [`.env`](../../environment)
- [`build`](../../build) (via [`scripts/config.sh`](../../scripts/config-sh) via [`scripts/subscripts/server/shadowsocks.sh`](../../scripts/subscripts/server/shadowsocks-sh))
- [`scripts/config.sh`](../../scripts/config-sh) (via [`scripts/subscripts/server/shadowsocks.sh`](../../scripts/subscripts/server/shadowsocks-sh))
- [`scripts/subscripts/server/shadowsocks.sh`](../../scripts/subscripts/server/shadowsocks-sh)

## File Content

The file has the following unexpanded content:

```json
{ 
  "server":"0.0.0.0", 
  "server_port":443, 
  "local_port":1080, 
  "password":"$PASSWORD", 
  "method":"chacha20-ietf-poly1305" 
}
```