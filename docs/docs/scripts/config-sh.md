# `config.sh` Script

This section explains how the `config.sh` script works.

`config.sh` is a script that is responsible for calling subscripts, which generate configuration files for the protocols. It also calls [`scripts/subscripts/belfi.sh`](subscripts/belfi-sh), which generates the [`belfi.conf`](../environment) for [`.env`](../environment)

## Used by

List of the files and commands this file is used by:

- [`build`](../build)

## Depends on 

List of the files this file depends on:

- [`.env`](../environment) (for configuration file generation)

## Variables

Table of variables this file defines:

| Variable       | Description                                                   |
|----------------|---------------------------------------------------------------|
| `$PASSWORD`     | via [`scripts/subscripts/belfi.sh`](subscripts/belfi-sh)|
| `$OBFPASSWORD`     | via [`scripts/subscripts/belfi.sh`](subscripts/belfi-sh)|
| `$UUID`  | via [`scripts/subscripts/belfi.sh`](subscripts/belfi-sh)|
| `$DOMAIN`     | via [`scripts/subscripts/belfi.sh`](subscripts/belfi-sh)|
| `$EMAIL`     | via [`scripts/subscripts/belfi.sh`](subscripts/belfi-sh)|
| `$CERTPATH`     | via [`scripts/subscripts/belfi.sh`](subscripts/belfi-sh)|
| `$PKEYPATH`     | via [`scripts/subscripts/belfi.sh`](subscripts/belfi-sh)|
| `$LOCALCERTPATH`     | via [`scripts/subscripts/belfi.sh`](subscripts/belfi-sh)|
| `$LOCALPKEYPATH`  | via [`scripts/subscripts/belfi.sh`](subscripts/belfi-sh)|

## File Content

The file has the following content:

```bash
#!/usr/bin/env bash

source ./scripts/subscripts/belfi.sh
source ./scripts/subscripts/server/hysteria2.sh
source ./scripts/subscripts/server/juicity.sh
source ./scripts/subscripts/server/shadowsocks.sh
source ./scripts/subscripts/server/trojan.sh
source ./scripts/subscripts/server/tuic.sh
```