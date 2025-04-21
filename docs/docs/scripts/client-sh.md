# `client.sh` Script

This section explains how the `client.sh` script works.

`client.sh` is a script that is responsible for calling subscripts, which generate the client URL files.

## Used by

List of the files and commands this file is used by:

- [`build`](../build)

## Depends on 

List of the files this file depends on:

- [`.env`](../environment) (for client URL file generation)

## File Content

The file has the following content:

```bash
#!/usr/bin/env bash

source ./scripts/subscripts/client/hysteria2.sh
source ./scripts/subscripts/client/juicity.sh
source ./scripts/subscripts/client/shadowsocks.sh
source ./scripts/subscripts/client/trojan.sh
source ./scripts/subscripts/client/tuic.sh
```