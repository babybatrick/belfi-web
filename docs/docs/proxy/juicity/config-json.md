# Juicity `config.json` file

This section explains how the Juicity `config.json` file works.

`config.json` is the core configuration file of the Juicity protocol. It defines how the proxy server shall behave and proxy the traffic.

## Used by

List of the files and commands this file is used by:

- [`compose.yaml`](../../compose-yaml)

## Depends on 

List of the files this file depends on:

- [`.env`](../../environment)
- [`build`](../../build) (via [`scripts/config.sh`](../../scripts/config-sh) via [`scripts/subscripts/server/juicity.sh`](../../scripts/subscripts/server/juicity-sh))
- [`scripts/config.sh`](../../scripts/config-sh) (via [`scripts/subscripts/server/juicity.sh`](../../scripts/subscripts/server/juicity-sh))
- [`scripts/subscripts/server/juicity.sh`](../../scripts/subscripts/server/juicity-sh)

## File Content

The file has the following unexpanded content:

```json
{
    "listen": ":443",
    "users": {
      "$config_uuid_juicity": "$PASSWORD"
    },
    "certificate": "$CERTPATH",
    "private_key": "$PKEYPATH",
    "congestion_control": "bbr",
    "log_level": "info"
}
```