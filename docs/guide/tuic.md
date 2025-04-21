# TUIC

The TUIC configuration file is located in the `belfi/proxy/tuic/config.json` directory or in the `belfi/scripts/subscripts/server/tuic.sh` script.

> Refer to the Configuration page in the Installation directory for clarification regarding the configuration file path.

## Configuration File

### `belfi/proxy/tuic/config.json`
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

### `belfi/scripts/subscripts/server/tuic.sh`
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

> Refer to the TUIC documentation by clicking [here](https://github.com/tuic-protocol/tuic) or use the link [https://github.com/tuic-protocol/tuic](https://github.com/tuic-protocol/tuic)

## Configuration Variables

| Variable      | Description                                            |
|---------------|--------------------------------------------------------|
| `$UUID`       | The user ID used as the client identifier              |
| `$PASSWORD`   | The password used for authentication                   |
| `$CERTPATH`   | Path to the `fullchain.pem` TLS certificate file       |
| `$PKEYPATH`   | Path to the `privkey.pem` TLS private key file         |
