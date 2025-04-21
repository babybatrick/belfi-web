# Configuration

After manually downloading Belfi, you'll need to configure the server before launching it. This section provides guidance on how to edit the necessary configuration files depending on your setup progress.

> For more in-depth explanations and examples, refer to the `Configuration` directory inside the repository.

## Editing the Server Configuration Files

There are two different sets of files you may need to edit, depending on whether you've already run the `./build` or `./scripts/config.sh` scripts—or used the one-line installation method.

### After Running the Scripts

If you've already executed either `./build` or `./scripts/config.sh` (the latter is automatically triggered by the former and by the one-line install script), the configuration files for each protocol are located at:

```
belfi/proxy/$protocol/config.json
```

Replace `$protocol` with the name of the protocol you want to configure (e.g., `shadowsocks`, `trojan`, `tuic`, `hysteria2`, `juicity`).

These files are now populated with actual runtime data, so you can safely modify them to suit your deployment.

> ✅ Edit these files if you have already run `./build` or `./scripts/config.sh`.

### Before Running the Scripts (Fresh Download)

If you have just downloaded Belfi and have not yet run any setup scripts, the editable templates are located at:

```
belfi/scripts/subscripts/server/$protocol.sh
```

Again, replace `$protocol` with the relevant protocol name. These shell scripts are responsible for generating the actual server configuration files during the setup phase.

> ⚠️ Edit these files only if you have **not** yet run `./build` or `./scripts/config.sh`.
