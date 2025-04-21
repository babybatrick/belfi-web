# Private Key

This section explains how the `privkey.pem` script works.

The `privkey.pem` file contains the private key associated with your SSL/TLS certificate. It is used by the server to decrypt data encrypted with the public key in the certificate and to establish secure connections

## Used by

List of the commands this file is used by:

- [`.env`](../environment)
- [`compose.yaml`](../compose-yaml)
- [`proxy/hysteria2/config.json`](../proxy/hysteria2/config-json)
- [`proxy/tuic/config.json`](../proxy/tuic/config-json)
- [`proxy/trojan/config.json`](../proxy/trojan/config-json)
- [`proxy/juicity/config.json`](../proxy/juicity/config-json)
- `./build`

## Depends on 

List of the files this file depends on:

- [`scripts/certificate.sh`](../scripts/certificate-sh)
