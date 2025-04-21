# Hysteria 2 `client` file

This section explains how the Hysteria 2 `client` file works.

`client` is the URL file for the client for the Hysteria 2 protocol.

## Used by

List of the files and commands this file is used by:

- [`compose.yaml`](../../compose-yaml)

## Depends on 

List of the files this file depends on:

- [`.env`](../../environment)
- [`build`](../../build) (via [`scripts/config.sh`](../../scripts/config-sh) via [`scripts/subscripts/client/hysteria2.sh`](../../scripts/subscripts/client/hysteria2-sh))
- [`scripts/config.sh`](../../scripts/config-sh) (via [`scripts/subscripts/client/hysteria2.sh`](../../scripts/subscripts/client/hysteria2-sh))
- [`scripts/subscripts/client/hysteria2.sh`](../../scripts/subscripts/client/hysteria2-sh)

## File Content

The file has the following unexpanded content:

```url
hysteria2://$PASSWORD@$DOMAIN:443?sni=$DOMAIN&obfs=salamander&obfs-password=$OBFPASSWORD
```