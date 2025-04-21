# Project Structure

This page describes the structure of the Belfi project directory. Understanding the layout will help you navigate the codebase and configuration files more efficiently.

## Repository Map
```
belfi/
├── compose.yaml
├── belfi.conf
├── .env
├── build
├── ssl/
│   ├── fullchain.pem
│   └── privkey.pem
├── scripts/
│   ├── setup.sh
│   ├── input.sh
│   ├── certificate.sh
│   ├── config.sh
│   ├── client.sh
│   ├── output.sh
│   └── subscripts/
│       ├── belfi.sh
│       ├── server/
│       │   ├── hysteria2.sh
│       │   ├── tuic.sh
│       │   ├── shadowsocks.sh
│       │   ├── trojan.sh
│       │   └── juicity.sh
│       └── client/
│           ├── hysteria2.sh
│           ├── tuic.sh
│           ├── shadowsocks.sh
│           ├── trojan.sh
│           └── juicity.sh
└── proxy/
    ├── hysteria2/
    │   ├── client
    │   └── config.json
    ├── juicity/
    │   ├── client
    │   └── config.json
    ├── shadowsocks/
    │   ├── client
    │   └── config.json
    ├── trojan/
    │   ├── client
    │   └── config.json
    └── tuic/
        ├── client
        └── config.json
```
## `/proxy`

Contains the runtime configuration for each protocol. These files are generated automatically during the build process, and are used directly by the containers.

## `/scripts`

Primary folder for setup logic and automation scripts.

| Script              | Description |
|---------------------|-------------|
| `setup.sh`          | Prepares the directory structure and initializes empty configs |
| `input.sh`          | Prompts for user input to be used in configuration |
| `certificate.sh`    | Automates certificate generation or assignment (if used) |
| `config.sh`         | Uses `.env` which is a symbolic link to `belfi.conf` and user input to fill in protocol configuration files |
| `subscripts/belfi.sh`| Called by config.sh. Defines variables in `belfi.conf` |
| `client.sh`         | Uses `.env` which is a symbolic link to `belfi.conf` to fill in client URL files |
| `output.sh`         | Displays client URLs with QR codes |

## `/scripts/subscripts`

Contains protocol-specific scripts used to generate config and URL files for each service.

### `/server/` — Server configuration generator folder

Each script generates the respective `config.json` for the protocol using environment variables.

### `/client/` — Client URL generator folder


Used for generating client-side configuration files (not essential for running the server).


## `/ssl`

This folder is reserved for storing TLS certificate files `fullchain.pem` and `privkey.pem`.