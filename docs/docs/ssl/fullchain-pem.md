# Fullchain Certificate

This section explains how the `fullchain.pem` script works.

The `fullchain.pem` is a file that contains the server certificate followed by the intermediate certificate(s) needed to establish trust.

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
