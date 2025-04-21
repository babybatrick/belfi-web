# `tuic.sh` Server Script

This section explains how the `tuic.sh` server script works.

`tuic.sh` is a script that is responsible for expanding the variables and generating the TUIC configuration file at [`proxy/tuic/config.json`](../../../proxy/tuic/config-json).

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

cat > ./proxy/tuic/config.json <<EOF
{
    "server": "[::]:443",
    "users": {
        "$UUID": "$PASSWORD"
    },
    "certificate": "$CERTPATH",
    "private_key": "$PKEYPATH",
    "congestion_control": "bbr",
    "alpn": ["h3"],
    "udp_relay_ipv6": true,
    "zero_rtt_handshake": false,
    "dual_stack": true,
    "auth_timeout": "3s",
    "task_negotiation_timeout": "3s",
    "max_idle_time": "10s",
    "send_window": 16777216,
    "receive_window": 8388608,
    "gc_interval": "3s",
    "gc_lifetime": "15s",
    "log_level": "info"
}
EOF
```