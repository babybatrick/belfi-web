# TUIC `client` file

This section explains how the TUIC `client` file works.

`client` is the URL file for the client for the TUIC protocol.

## Used by

List of the files and commands this file is used by:

- [`compose.yaml`](../../compose-yaml)

## Depends on 

List of the files this file depends on:

- [`.env`](../../environment)
- [`build`](../../build) (via [`scripts/config.sh`](../../scripts/config-sh) via [`scripts/subscripts/client/tuic.sh`](../../scripts/subscripts/client/tuic-sh))
- [`scripts/config.sh`](../../scripts/config-sh) (via [`scripts/subscripts/client/tuic.sh`](../../scripts/subscripts/client/tuic-sh))
- [`scripts/subscripts/client/tuic.sh`](../../scripts/subscripts/client/tuic-sh)

## File Content

The file has the following unexpanded content:

```url
tuic://$UUID:$PASSWORD@$DOMAIN:433?sni=$DOMAIN&congestion_control=bbr&alpn=h3&upd_relay_mode=native
```