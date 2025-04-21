# Hysteria 2 `config.json` file

This section explains how the Hysteria 2 `config.json` file works.

`config.json` is the core configuration file of the Hysteria 2 protocol. It defines how the proxy server shall behave and proxy the traffic.

## Used by

List of the files and commands this file is used by:

- [`compose.yaml`](../../compose-yaml)

## Depends on 

List of the files this file depends on:

- [`.env`](../../environment)
- [`build`](../../build) (via [`scripts/config.sh`](../../scripts/config-sh) via [`scripts/subscripts/server/hysteria2.sh`](../../scripts/subscripts/server/hysteria2-sh))
- [`scripts/config.sh`](../../scripts/config-sh) (via [`scripts/subscripts/server/hysteria2.sh`](../../scripts/subscripts/server/hysteria2-sh))
- [`scripts/subscripts/server/hysteria2.sh`](../../scripts/subscripts/server/hysteria2-sh)

## File Content

The file has the following unexpanded content:

```json
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
```