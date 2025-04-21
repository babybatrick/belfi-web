# `hysteria2.sh` Client Script

This section explains how the `hysteria2.sh` client script works.

`hysteria2.sh` is a script that is responsible for expanding the variables and generating the Hysteria 2 client URL file at [`proxy/hysteria2/client`](../../../proxy/hysteria2/client).

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

cat > ./proxy/hysteria2/client <<EOF
hysteria2://$PASSWORD@$DOMAIN:443?sni=$DOMAIN&obfs=salamander&obfs-password=$OBFPASSWORD
EOF
```