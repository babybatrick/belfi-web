# Initial Setup

This section outlines the minimal requirements for running **Belfi** successfully, including OS compatibility, server specs, and necessary firewall configurations.

## 🖥️ Operating System Compatibility

Belfi has been fully tested on **Debian 12**, and is expected to work on other Debian-based distributions and Ubuntu versions. Other Linux distributions may work but have not yet been verified.

### Tested Operating Systems

| OS Name   | Version | Status     |
|----------|---------|------------|
| Debian   | 12      | ✅ Tested   |
| Debian   | 11, 13  | ⚠️ Expected to work |
| Ubuntu   | Any     | ❓ Not Tested |
| Arch     | —       | ❓ Not Tested |
| Fedora   | —       | ❓ Not Tested |

## ⚙️ Server Requirements

Belfi uses **Docker Compose** to deploy 5 separate containers—one for each protocol. These containers are lightweight and don’t demand high system specs.

### Minimum Server Specs

| Component | Minimum    | Recommended |
|-----------|------------|-------------|
| CPU       | 1 vCore    | 2 vCores    |
| Memory    | 1 GB       | 2 GB        |
| Storage   | 5 GB       | 10 GB       |

> 💡 Note: Belfi is designed to run on minimal VPS setups and should be fine on most modern hosting providers.

## 🔐 Firewall & Port Requirements

Belfi manages 5 different proxy protocols, each listening on its own port. The following ports need to be open on your server's firewall:

### Required Open Ports

| Protocol    | Port | Type |
|-------------|------|------|
| TUIC        | 433  | UDP  |
| Hysteria2   | 443  | UDP  |
| Shadowsocks | 453  | TCP  |
| Trojan      | 463  | TCP  |
| Juicity     | 473  | UDP  |

> 🚨 **Important:** Even though certain protocols use only TCP or UDP, it's recommended to allow **both TCP and UDP** on each port to avoid potential client-side NAT or firewall issues.
