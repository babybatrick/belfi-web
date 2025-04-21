# TUIC `config.json` file

This section explains how the TUIC `config.json` file works.

`config.json` is the core configuration file of the TUIC protocol. It defines how the proxy server shall behave and proxy the traffic.

## Used by

List of the files and commands this file is used by:

- [`compose.yaml`](../../compose-yaml)

## Depends on 

List of the files this file depends on:

- [`.env`](../../environment)
- [`build`](../../build) (via [`scripts/config.sh`](../../scripts/config-sh) via [`scripts/subscripts/server/tuic.sh`](../../scripts/subscripts/server/tuic-sh))
- [`scripts/config.sh`](../../scripts/config-sh) (via [`scripts/subscripts/server/tuic.sh`](../../scripts/subscripts/server/tuic-sh))
- [`scripts/subscripts/server/tuic.sh`](../../scripts/subscripts/server/tuic-sh)

## File Content

The file has the following unexpanded content:

```json
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
```