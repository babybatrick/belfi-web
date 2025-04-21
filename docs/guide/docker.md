# Docker Operations

Belfi utilizes Docker and Docker Compose to manage its protocol containers. Below are the essential commands you can use to operate the application as a whole or to manage individual protocol containers.

## Stopping the Application

To stop all containers and shut down the application, navigate to the `/belfi` directory and run:

```bash
docker compose down
```

## Stopping Individual Containers

To stop a specific protocol container, run the following command inside the `/belfi` directory, replacing `$protocol` with the protocol name (e.g., `tuic`, `hysteria2`, `shadowsocks`, `trojan`, `juicity`):

```bash
docker compose stop $protocol
```

## Starting the Application

To start the entire Belfi application with all containers in the background (detached mode), run:

```bash
docker compose up -d
```

> ✅ Always include the `-d` flag to run the containers in detached mode. Without it, containers will stop when the terminal session ends.

## Starting Individual Containers

To start a specific protocol container after editing its configuration or if it was previously stopped:

```bash
docker compose start $protocol
```

> 🛠 Use this if you've stopped a container to edit its settings.

> ⚙️ Alternatively, if the container is already running, you can apply new configuration changes by using:
```bash
docker compose restart $protocol
```
This minimizes downtime while applying updates.
