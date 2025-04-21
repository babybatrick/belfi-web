# `build` Script

This section explains how the `build` script works.

The `build` script is the main file of the application, it calls several subscripts to generate configuration files and start up the application.

## Used by

List of the commands this file is used by:

- `./build`

## Depends on 

List of the files this file depends on:

- [`scripts/setup.sh`](scripts/setup-sh)
- [`scripts/input.sh`](scripts/input-sh)
- [`scripts/certificate.sh`](scripts/certificate-sh)
- [`scripts/config.sh`](scripts/config-sh)
- [`scripts/client.sh`](scripts/client-sh)
- [`scripts/output.sh`](scripts/output-sh)
- [`scripts/subscripts/belfi.sh`](scripts/subscripts/belfi-sh) (via [`scripts/config.sh`](scripts/config-sh))
- [`scripts/subscripts/server/hysteria2.sh`](scripts/subscripts/server/hysteria2-sh) (via [`scripts/config.sh`](scripts/config-sh))
- [`scripts/subscripts/server/juicity.sh`](scripts/subscripts/server/juicity-sh) (via [`scripts/config.sh`](scripts/config-sh))
- [`scripts/subscripts/server/shadowsocks.sh`](scripts/subscripts/server/shadowsocks-sh) (via [`scripts/config.sh`](scripts/config-sh))
- [`scripts/subscripts/server/trojan.sh`](scripts/subscripts/server/trojan-sh) (via [`scripts/config.sh`](scripts/config-sh))
- [`scripts/subscripts/server/tuic.sh`](scripts/subscripts/server/tuic-sh) (via [`scripts/config.sh`](scripts/config-sh))
- [`scripts/subscripts/client/hysteria2.sh`](scripts/subscripts/client/hysteria2-sh) (via [`scripts/client.sh`](scripts/client-sh))
- [`scripts/subscripts/client/juicity.sh`](scripts/subscripts/client/juicity-sh) (via [`scripts/client.sh`](scripts/client-sh))
- [`scripts/subscripts/client/shadowsocks.sh`](scripts/subscripts/client/shadowsocks-sh) (via [`scripts/client.sh`](scripts/client-sh))
- [`scripts/subscripts/client/trojan.sh`](scripts/subscripts/client/trojan-sh) (via [`scripts/client.sh`](scripts/client-sh))
- [`scripts/subscripts/client/tuic.sh`](scripts/subscripts/client/tuic-sh) (via [`scripts/client.sh`](scripts/client-sh))

## Variables

This file defines all variables in the project indirectly.

Table of variables this file defines:

| Variable       | Description                                                   |
|----------------|---------------------------------------------------------------|
| `$PASSWORD`     | via [`scripts/config.sh`](scripts/config-sh) via [`scripts/subscripts/belfi.sh`](scripts/subscripts/belfi-sh)|
| `$OBFPASSWORD`     | via [`scripts/config.sh`](scripts/config-sh) via [`scripts/subscripts/belfi.sh`](scripts/subscripts/belfi-sh)|
| `$UUID`  | via [`scripts/config.sh`](scripts/config-sh) via [`scripts/subscripts/belfi.sh`](scripts/subscripts/belfi-sh)|
| `$DOMAIN`     | via [`scripts/config.sh`](scripts/config-sh) via [`scripts/subscripts/belfi.sh`](scripts/subscripts/belfi-sh)|
| `$EMAIL`     | via [`scripts/config.sh`](scripts/config-sh) via [`scripts/subscripts/belfi.sh`](scripts/subscripts/belfi-sh)|
| `$CERTPATH`     | via [`scripts/config.sh`](scripts/config-sh) via [`scripts/subscripts/belfi.sh`](scripts/subscripts/belfi-sh)|
| `$PKEYPATH`     | via [`scripts/config.sh`](scripts/config-sh) via [`scripts/subscripts/belfi.sh`](scripts/subscripts/belfi-sh)|
| `$LOCALCERTPATH`     | via [`scripts/config.sh`](scripts/config-sh) via [`scripts/subscripts/belfi.sh`](scripts/subscripts/belfi-sh)|
| `$LOCALPKEYPATH`  | via [`scripts/config.sh`](scripts/config-sh) via [`scripts/subscripts/belfi.sh`](scripts/subscripts/belfi-sh)|
| `$domain`     | via [`scripts/config.sh`](scripts/config-sh) via [`scripts/input.sh`](scripts/input-sh)|
| `$email`     | via [`scripts/config.sh`](scripts/config-sh) via [`scripts/input.sh`](scripts/input-sh)|
| `$certpath`     | via [`scripts/config.sh`](scripts/config-sh) via [`scripts/certificate.sh`](scripts/certificate-sh)|
| `$pkeypath`     | via [`scripts/config.sh`](scripts/config-sh) via [`scripts/certificate.sh`](scripts/certificate-sh)|
| `$localcertpath`     | via [`scripts/config.sh`](scripts/config-sh) via [`scripts/certificate.sh`](scripts/certificate-sh)|
| `$localpkeypath`  | via [`scripts/config.sh`](scripts/config-sh) via [`scripts/certificate.sh`](scripts/certificate-sh)|

Table of variables this file utilizes:

| Variable       | Description                                                   |
|----------------|---------------------------------------------------------------|
| `$PASSWORD`     | Config password|
| `$OBFPASSWORD`     | Hysteria 2 obfuscation password|
| `$UUID`  | UUID|
| `$DOMAIN`     | Domain name|
| `$EMAIL`     | Email address|
| `$CERTPATH`     | Path to the `fullchain.pem` TLS certificate file in the Docker Container|
| `$PKEYPATH`     | Path to the `privkey.pem` TLS private key file in the Docker Container|
| `$LOCALCERTPATH`     | Path to the `fullchain.pem` TLS certificate file on the host|
| `$LOCALPKEYPATH`  | Path to the `privkey.pem` TLS private key file on the host|
| `$domain`     | Local domain name variable|
| `$email`     | Local domain name variable|
| `$certpath`     | Local domain name variable|
| `$pkeypath`     | Local domain name variable|
| `$localcertpath`     | Local domain name variable|
| `$localpkeypath`  | Local domain name variable|

## File Content

The file has the following content:

```bash
#!/usr/bin/env bash

./scripts/setup.sh
source ./scripts/input.sh
source ./scripts/certificate.sh
source ./scripts/config.sh
source ./scripts/client.sh

docker compose up -d

./scripts/output.sh
```