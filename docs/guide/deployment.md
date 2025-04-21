# Deployment

After manually downloading the repository, deploying Belfi is a straightforward process. Follow the steps below to get your proxy servers up and running.

## One-Line Deployment Script

Belfi provides a single command to handle the entire deployment process. This command executes the `./build` script, which orchestrates all necessary setup steps, generates configurations, and starts the containers for each protocol.

```bash
./build
```

> ✅ Make sure you are inside the `/belfi` directory when running this script.
>
> The script will automatically detect your environment and configure all five protocols: Hysteria2, TUIC, Shadowsocks, Trojan, and Juicity.

Once executed, your server should be fully functional and ready to start proxying traffic.
