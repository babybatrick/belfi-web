# `juicity.sh` Server Script

This section explains how the `juicity.sh` server script works.

`juicity.sh` is a script that is responsible for expanding the variables and generating the TUIC configuration file at [`proxy/juicity/config.json`](../../../proxy/juicity/config-json).

## Used by

List of the files and commands this file is used by:

- [`build`](../../../build) (via [`scripts/config.sh`](../../config-sh))
- [`scripts/config.sh`](../../config-sh)

## Depends on 

List of the files this file depends on:

- [`.env`](../../../environment) (for configuration file generation)

## File Content

The file has the following content:

```bash
#!/usr/bin/env bash

source .env

cat > ./proxy/juicity/config.json <<EOF
{
  "listen": ":443",
  "users": {
    "$UUID": "$PASSWORD"
  },
  "certificate": "$CERTPATH",
  "private_key": "$PKEYPATH",
  "congestion_control": "bbr",
  "log_level": "info"
}
EOF
```