# ShadowSocks

The ShadowSocks configuration file is located in the `belfi/proxy/shadowsocks/config.json` directory or in the `belfi/scripts/subscripts/server/shadowsocks.sh` script.

> Refer to the Configuration page in the Installation directory for clarification regarding the configuration file path.

## Configuration File

### `belfi/proxy/shadowsocks/config.json`
```json
{ 
  "server": "0.0.0.0", 
  "server_port": 443, 
  "local_port": 1080, 
  "password": "$PASSWORD", 
  "method": "chacha20-ietf-poly1305" 
}
```

### `belfi/scripts/subscripts/server/shadowsocks.sh`
```bash
#!/usr/bin/env bash

source .env

cat > ./proxy/shadowsocks/config.json <<EOF
{ 
  "server": "0.0.0.0", 
  "server_port": 443, 
  "local_port": 1080, 
  "password": "$PASSWORD", 
  "method": "chacha20-ietf-poly1305" 
}
EOF
```

> Refer to the ShadowSocks documentation by clicking [here](https://shadowsocks.org) or use the link [https://shadowsocks.org](https://shadowsocks.org)

## Configuration Variables

| Variable     | Description                                          |
|--------------|------------------------------------------------------|
| `$PASSWORD`  | The password used for authentication (shared value) |

## Transport Layer & Plugins

ShadowSocks does not use SSL/TLS certificates by default, as it operates over the SOCKS5 transport layer. To switch to another transport layer such as HTTP or WebSocket, a SIP003-compliant plugin (e.g., `v2ray-plugin`) must be used.

If you decide to use a plugin:
- Modify the `compose.yaml` file to adjust the container’s environment and command parameters
- Update the configuration file accordingly
- Provide paths to certificate and key files if the plugin setup includes TLS

## Alternative Docker Image with Plugin Support

A prebuilt Docker image by **acrisliu**, which bundles ShadowSocks with v2ray-plugin support, is available at:

- Docker Hub: [acrisliu/shadowsocks-libev](https://hub.docker.com/r/acrisliu/shadowsocks-libev)
- Documentation: [GitHub](https://github.com/Acris/docker-shadowsocks-libev)

> This image is not used by default in Belfi. You can use it by modifying the image field in the relevant `compose.yaml` section.
