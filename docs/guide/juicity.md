# Juicity

The Juicity configuration file is located in the `belfi/proxy/juicity/config.json` directory or in the `belfi/scripts/subscripts/server/juicity.sh` script.

> Refer to the Configuration page in the Installation directory for clarification regarding the configuration file path.

## Configuration File

### `belfi/proxy/juicity/config.json`
```json
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
```

### `belfi/scripts/subscripts/server/juicity.sh`
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

> Refer to the juicity documentation by clicking [here](https://github.com/juicity-protocol/juicity) or use the link [https://github.com/juicity-protocol/juicity](https://github.com/juicity-protocol/juicity)

## Configuration Variables

| Variable      | Description                                            |
|---------------|--------------------------------------------------------|
| `$UUID`       | The user ID used as the client identifier              |
| `$PASSWORD`   | The password used for authentication                   |
| `$CERTPATH`   | Path to the `fullchain.pem` TLS certificate file       |
| `$PKEYPATH`   | Path to the `privkey.pem` TLS private key file         |
