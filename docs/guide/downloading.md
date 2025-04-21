# Downloading

Belfi can be installed in two different ways: using an automated setup script or by manually cloning the repository. If you prefer a quick and hassle-free setup, the **Script-Based Installation** is recommended. For users who want full control over configuration files, the **Manual Download** is the better choice.

## Script-Based Installation

The setup script, available at `sh.belfi.io`, provides a one-line installation method for quickly setting up Belfi and its proxy containers.

To download and run the script, use the following command:

```
bash <(curl -fsSL https://sh.belfi.io/)
```

> This will download, install, and start the containers automatically. No further configuration is required.

> **Note**: The script requires Bash. If your system defaults to another shell (e.g., `sh`, `zsh`, `dash`), the script may not function as intended. Debian and Ubuntu-based distributions should work out of the box.

## Manual Download

To manually install Belfi, make sure you have `git` installed on your system, then run:

```
git clone https://github.com/Babybatrick/belfi.git
```

Next, change into the Belfi directory:

```
cd belfi
```

> It is recommended to clone the repository into the `/root` directory for consistency.
