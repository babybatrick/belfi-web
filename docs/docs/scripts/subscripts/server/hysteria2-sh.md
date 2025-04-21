# `hysteria2.sh` Server Script

This section explains how the `hysteria2.sh` server script works.

`hysteria2.sh` is a script that is responsible for expanding the variables and generating the Hysteria 2 configuration file at [`proxy/hysteria2/config.json`](../../../proxy/hysteria2/config-json).

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

cat > ./proxy/hysteria2/config.json <<EOF
{
    "listen": ":443",
    "tls": {
        "cert": "$CERTPATH",
        "key": "$PKEYPATH",
        "sniGuard": "strict"
    },
    "obfs": {
        "type": "salamander",
        "salamander": {
            "password": "$OBFPASSWORD"
        }
    },
    "bandwidth": {
        "up": "1 gbps",
        "down": "1 gbps"
    },
    "ignoreClientBandwidth": false,
    "speedTest": false,
    "disableUDP": false,
    "udpIdleTimeout": "120s",
    "auth": {
        "type": "password",
        "password": "$PASSWORD"
    },
    "sniff": {
        "enable": true,
        "timeout": "2s",
        "rewriteDomain": false,
        "tcpPorts": "80,443,8000-9000",
        "udpPorts": "all"
    },
    "masquerade": {
        "type": "proxy",
        "proxy": {
            "url": "https://baidu.com/",
            "rewriteHost": true
        }
    }
}
EOF
```