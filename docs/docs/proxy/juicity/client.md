# Juicity `client` file

This section explains how the Juicity `client` file works.

`client` is the URL file for the client for the Juicity protocol.

## Used by

List of the files and commands this file is used by:

- [`compose.yaml`](../../compose-yaml)

## Depends on 

List of the files this file depends on:

- [`.env`](../../environment)
- [`build`](../../build) (via [`scripts/config.sh`](../../scripts/config-sh) via [`scripts/subscripts/client/juicity.sh`](../../scripts/subscripts/client/juicity-sh))
- [`scripts/config.sh`](../../scripts/config-sh) (via [`scripts/subscripts/client/juicity.sh`](../../scripts/subscripts/client/juicity-sh))
- [`scripts/subscripts/client/juicity.sh`](../../scripts/subscripts/client/juicity-sh)

## File Content

The file has the following unexpanded content:

```url
juicity://$UUID:$PASSWORD@$DOMAIN:473?sni=$DOMAIN&congestion_control=bbr
```