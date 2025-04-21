# Hysteria 2

The Hysteria 2 configuration file is located in the `belfi/proxy/hysteria2/config.json` directory or in the `belfi/scripts/subscripts/server/hysteria2.sh` script.

> Refer to the Configuration page in the Installation directory for clarification regarding the configuration file path.

## Configuration File

### `belfi/proxy/hysteria2/config.json`
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

### `belfi/scripts/subscripts/server/hysteria2.sh`
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

> Refer to the Hysteria 2 documentation by clicking [here](https://v2.hysteria.network) or use the link [https://v2.hysteria.network](https://v2.hysteria.network)

By default, `baidu.com` is used as the masquerade URL, which is suitable for users in China. If you're located elsewhere, it's recommended to change this to a locally popular domain or search engine such as `google.com`, `bing.com`, or `yahoo.com` for western countries, `yandex.ru` or `dzen.ru` for Russia and CIS countries, and `yooz.ir`, `rismoon.com`, or `salam.ir` for Iran.

### Example for western countries:
```json
"masquerade": {
    "type": "proxy",
    "proxy": {
        "url": "https://google.com/",
        "rewriteHost": true
    }
}
```

### Example for Russia or CIS countries:
```json
"masquerade": {
    "type": "proxy",
    "proxy": {
        "url": "https://yandex.ru/",
        "rewriteHost": true
    }
}
```

### Example for Iran:
```json
"masquerade": {
    "type": "proxy",
    "proxy": {
        "url": "https://salam.ir/",
        "rewriteHost": true
    }
}
```

## Configuration Variables

| Variable       | Description                                                   |
|----------------|---------------------------------------------------------------|
| `$PASSWORD`     | The password used for authentication (same across all protocols) |
| `$OBFPASSWORD`  | The obfuscation password specific to Hysteria 2               |
| `$CERTPATH`     | Path to the `fullchain.pem` TLS certificate file              |
| `$PKEYPATH`     | Path to the `privkey.pem` TLS private key file                |
