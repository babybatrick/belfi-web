# Documentation

This documentation provides a complete and detailed overview of how Belfi works, how it is structured, and how to configure and manage it effectively.

Whether you are a new user or a developer looking to understand the internals, this documentation will walk you through every part of the project.

## What This Documentation Covers

- **Application Structure**  
  Learn how Belfi is organized — including the purpose of each major directory and script.

- **File-by-File Breakdown**  
  Detailed descriptions of every core file in the repository, including configuration templates and automation scripts.

- **Configuration Guide**  
  Instructions on how to customize protocol settings, edit environment variables, and generate config files.

- **Deployment Process**  
  Step-by-step explanation of how the build system works, what the `./build` script does, and how Docker Compose is used to bring up the services.

- **Protocol Integrations**  
  Overview of each supported protocol (Hysteria2, TUIC, Shadowsocks, Trojan, Juicity), how it's configured, and how it runs in isolation via containers.

- **Advanced Usage**  
  Topics like plugin support, custom transport layers, manual tweaks to the `compose.yaml`, and TLS integration.

- **Troubleshooting**  
  Common issues and their solutions, as well as guidance on how to debug and report problems.

> If you're looking to modify or extend Belfi, this documentation will give you the foundation to understand how every part fits together.

Start with the [Application Structure](./structure.md) or jump into any topic from the sidebar or navigation list.
