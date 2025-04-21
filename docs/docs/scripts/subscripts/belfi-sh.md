# `belfi.sh` Script

This section explains how the `belfi.sh` script works.

`belfi.sh` is a script that is responsible for generating the `belfi.conf` and [`.env`](../../environment) environment files.

## Used by

List of the files and commands this file is used by:

- [`build`](../../build) (via [`scripts/config.sh`](../config-sh))
- [`scripts/config.sh`](../config-sh)

## Depends on 

List of the files this file depends on:

- [`scripts/certificate.sh`](../certificate-sh) (variable definition)
- [`scripts/input.sh`](../input-sh) (variable definition)

## Variables

Table of variables this file defines:

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

## File Content

The file has the following content:

```bash
#!/usr/bin/env bash

cat << EOF > belfi.conf
PASSWORD=$(openssl rand -base64 48 | tr '/+' 'xQ')
OBFPASSWORD=$(openssl rand -base64 48 | tr '/+' 'xQ')
UUID=$(uuidgen)
DOMAIN=${domain}
EMAIL=${email}
CERTPATH=${certpath}
PKEYPATH=${pkeypath}
LOCALCERTPATH=${localcertpath}
LOCALPKEYPATH=${localpkeypath}
EOF
```