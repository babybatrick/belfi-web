# Trojan `client` file

This section explains how the Trojan `client` file works.

`client` is the URL file for the client for the Trojan protocol.

## Used by

List of the files and commands this file is used by:

- [`compose.yaml`](../../compose-yaml)

## Depends on 

List of the files this file depends on:

- [`.env`](../../environment)
- [`build`](../../build) (via [`scripts/config.sh`](../../scripts/config-sh) via [`scripts/subscripts/client/trojan.sh`](../../scripts/subscripts/client/trojan-sh))
- [`scripts/config.sh`](../../scripts/config-sh) (via [`scripts/subscripts/client/trojan.sh`](../../scripts/subscripts/client/trojan-sh))
- [`scripts/subscripts/client/trojan.sh`](../../scripts/subscripts/client/trojan-sh)

## File Content

The file has the following unexpanded content:

```url
trojan://$PASSWORD@$DOMAIN:463?peer=$DOMAIN&alpn=h2
```