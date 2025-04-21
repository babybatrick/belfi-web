# `input.sh` Script

This section explains how the `input.sh` script works.

`input.sh` is a script that is responsible for user input. It obtains the domain name and email address and defines variables based on them.

## Used by

List of the files and commands this file is used by:

- [`build`](../build)

## Variables

Table of variables this file defines:

| Variable       | Description                                                   |
|----------------|---------------------------------------------------------------|
| `$domain`     | Domain name|
| `$email`     | Email address|

## File Content

The file has the following content:

```bash
#!/usr/bin/env bash

#INPUTTING DOMAIN
read -p "Enter a domain name: " domain
[[ $domain =~ ^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$ ]] && echo "Proceeding" && echo "" || { echo "Invalid domain name, exiting..."; exit 1; }

#INPUTTING EMAIN
read -p "Enter an email address: " email
[[ $email =~ ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$ ]] && echo "Proceeding" && echo "" || { echo "Invalid email address, exiting..."; exit 1; }
```