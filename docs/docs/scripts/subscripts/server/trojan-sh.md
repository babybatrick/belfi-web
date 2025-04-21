# `trojan.sh` Server Script

This section explains how the `trojan.sh` server script works.

`trojan.sh` is a script that is responsible for expanding the variables and generating the Trojan configuration file at [`proxy/trojan/config.json`](../../../proxy/trojan/config-json).

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

cat > ./proxy/trojan/config.json <<EOF
{
    "run_type": "server",
    "local_addr": "0.0.0.0",
    "local_port": 443,
    "remote_addr": "127.0.0.1",
    "remote_port": 80,
    "password": ["$PASSWORD"],
    "log_level": 1,
    "ssl": {
        "cert": "$CERTPATH",
        "key": "$PKEYPATH",
        "key_password": "",
        "cipher": "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384",
        "cipher_tls13": "TLS_AES_128_GCM_SHA256:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_256_GCM_SHA384",
        "prefer_server_cipher": true,
        "alpn": [
            "h2",
            "http/1.1"
        ],
        "reuse_session": true,
        "session_ticket": false,
        "session_timeout": 600,
        "plain_http_response": "",
        "curves": "",
        "dhparam": ""
    },
    "tcp": {
        "prefer_ipv4": false,
        "no_delay": true,
        "keep_alive": true,
        "reuse_port": true,
        "fast_open": false,
        "fast_open_qlen": 20
    }
}
EOF
```