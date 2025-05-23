# Environment

This section explains how the environment files `.env` and `belfi.conf` work.

The `.env` is a symbolic link, meaning that by itself it stores no content, and is a link to a different file, in this case `belfi.conf`. The `belfi.conf` file in this case is the file that is going to be generated by [`scripts/config.sh`](scripts/config-sh) via [`scripts/subscripts/belfi.sh`](scripts/subscripts/belfi-sh).

## Used by

List of the files and commands `.env` is used by:

- [`compose.yaml`](compose-yaml) (via [`scripts/config.sh`](scripts/config-sh))
- [`build`](build)
- [`scripts/config.sh`](scripts/config-sh) (via [`build`](build))
- [`scripts/client.sh`](scripts/client-sh) (via [`build`](build))
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

## Depends on 

List of the files `belfi.conf` depends on:

- [`scripts/config.sh`](scripts/config-sh) (via [`scripts/subscripts/belfi.sh`](scripts/subscripts/belfi-sh), by expanding the local variables and generating UUID, OBFPASSWORD and PASSWORD)
- [`scripts/input.sh`](scripts/input-sh) (defines `$domain` and `email` variables)
- [`scripts/certificate.sh`](scripts/certificate-sh) (defines `$certpath`, `$pkeypath`, `$localcertpath` and `$localpkeypath`)

## Variables

Table of variables this file defines after generation:

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

The file has the following empty content:

```env
PASSWORD=
OBFPASSWORD=
UUID=
DOMAIN=
EMAIL=
CERTPATH=
PKEYPATH=
LOCALCERTPATH=
LOCALPKEYPATH=
```

and the following unexpanded content:

```env
PASSWORD=$(openssl rand -base64 48 | tr '/+' 'xQ')
OBFPASSWORD=$(openssl rand -base64 48 | tr '/+' 'xQ')
UUID=$(uuidgen)
DOMAIN=${domain}
EMAIL=${email}
CERTPATH=${certpath}
PKEYPATH=${pkeypath}
LOCALCERTPATH=${localcertpath}
LOCALPKEYPATH=${localpkeypath}
```