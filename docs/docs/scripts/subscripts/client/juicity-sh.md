# `juicity.sh` Client Script

This section explains how the `juicity.sh` client script works.

`juicity.sh` is a script that is responsible for expanding the variables and generating the Hysteria 2 client URL file at [`proxy/juicity/client`](../../../proxy/juicity/client).

## Used by

List of the files and commands this file is used by:

- [`build`](../../../build) (via [`scripts/client.sh`](../../client-sh))
- [`scripts/client.sh`](../../client-sh)

## Depends on 

List of the files this file depends on:

- [`.env`](../../../environment) (for configuration file generation)

## File Content

The file has the following content:

```bash
#!/usr/bin/env bash

source .env

cat > ./proxy/juicity/client <<EOF
juicity://$UUID:$PASSWORD@$DOMAIN:473?sni=$DOMAIN&congestion_control=bbr
EOF
```