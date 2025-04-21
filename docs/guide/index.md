# What is Belfi?

**Belfi** is a lightweight and developer-friendly proxy management tool designed to deploy multiple protocol servers seamlessly using containerized environments. With Belfi, you can run a variety of modern proxy protocols — such as **Shadowsocks**, **Trojan**, **Hysteria2**, **TUIC**, and **Juicity** — each isolated in its own Docker container, managed through a unified setup.

## 🔧 Why Belfi?

Belfi was built to solve a common pain point: running several types of proxy servers on the same host without configuration headaches. Instead of managing complex configs manually, Belfi handles the orchestration for you, keeping each protocol cleanly separated while enabling centralized control.

## ✨ Key Features

- **Multi-Protocol Support**  
  Instantly deploy containers for Shadowsocks, Trojan, Hysteria2, TUIC, and Juicity.

- **Container-Based Isolation**  
  Each proxy runs in its own container, ensuring clean boundaries and easy debugging.

- **Single Command Launch**  
  Deploy all services with a single command via Docker Compose.

- **Minimal Overhead**  
  No unnecessary abstraction — just the essentials to spin up and run proxies.

## ⚙️ Customization

Belfi is designed to be easily configurable:

- **Port Mapping**  
  Each protocol service can be bound to your desired port in the Docker Compose file.

- **Config Templates**  
  Default configuration files are included for each protocol and can be freely modified.

- **Domain & TLS Setup**  
  Can be used alongside reverse proxies like Nginx or Caddy for TLS termination and domain - based routing.

- **Extendable Architecture**  
  Want to add another protocol? Just drop in another container definition.

## 🚀 Use Cases

- Setting up personal proxy servers with minimal effort  
- Testing multiple protocols side by side  
- Hosting public or shared proxy endpoints  
- Evaluating performance and compatibility of modern proxy solutions  


## 🧠 Philosophy

Belfi follows the UNIX principle: **do one thing and do it well.** It doesn’t try to abstract away the protocols—it just helps you deploy and manage them reliably, quickly, and cleanly.