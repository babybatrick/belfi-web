# `certificate.sh` Script

This section explains how the `certificate.sh` script works.

`certificate.sh` is a script that is responsible for obtaining the SSL/TLS certificates, using Letsencrypt.

## Used by

List of the files and commands this file is used by:

- [`build`](../build)

## Variables

Table of variables this file defines:

| Variable       | Description                                                   |
|----------------|---------------------------------------------------------------|
| `$certpath`     | Path to the `fullchain.pem` TLS certificate file in the Docker Container|
| `$pkeypath`     | Path to the `privkey.pem` TLS private key file in the Docker Container|
| `$localcertpath`     | Path to the `fullchain.pem` TLS certificate file on the host|
| `$localpkeypath`  | Path to the `privkey.pem` TLS private key file on the host|

## File Content

The file has the following content:

```bash
#!/usr/bin/env bash

#REQUESTING CERTIFICATE
certbot certonly --standalone -d $domain --non-interactive --agree-tos --no-eff-email --email $email || { echo "Error while generating the certificate, exiting..."; exit 1; }

#CREATING CERTIFICATE PATH VARIABLES
certpath=/etc/letsencrypt/live/$domain/fullchain.pem
pkeypath=/etc/letsencrypt/live/$domain/privkey.pem

#CREATING LOCAL CERTIFICATE PATH VARIABLES
localcertpath=./ssl/fullchain.pem
localpkeypath=./ssl/privkey.pem

#COPYING CERTIFICATES TO LOCAL PATH
cp $certpath $localcertpath
cp $pkeypath $localpkeypath
```