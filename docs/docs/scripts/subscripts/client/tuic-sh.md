# `tuic.sh` Client Script

This section explains how the `tuic.sh` client script works.

`tuic.sh` is a script that is responsible for expanding the variables and generating the TUIC client URL file at [`proxy/tuic/client`](../../../proxy/tuic/client).

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

cat > ./proxy/tuic/client <<EOF
tuic://$UUID:$PASSWORD@$DOMAIN:433?sni=$DOMAIN&congestion_control=bbr&alpn=h3&upd_relay_mode=native
EOF
```