# `output.sh` Script

This section explains how the `output.sh` script works.

`output.sh` is a script that is run after the generation of all files has been completed. It outputs client URLs and prints QR codes of those URLs.

## Used by

List of the files and commands this file is used by:

- [`build`](../build)

## Depends on 

List of the files this file depends on:

- [`proxy/hysteria2/client`](../proxy/hysteria2/client)
- [`proxy/tuic/client`](../proxy/tuic/client)
- [`proxy/shadowsocks/client`](../proxy/shadowsocks/client)
- [`proxy/trojan/client`](../proxy/trojan/client)
- [`proxy/juicity/client`](../proxy/juicity/client)

## File Content

The file has the following content:

```bash
#!/usr/bin/env bash

echo "belfi is ready to go!"
echo ""
echo ""
echo ""
echo "HYSTERIA2-----------HYSTERIA2"
qrencode -t UTF8 $(cat ./proxy/hysteria2/client)
echo $(cat ./proxy/hysteria2/client)
echo ""
echo ""
echo ""
echo "TUIC---------------------TUIC"
qrencode -t UTF8 $(cat ./proxy/tuic/client)
echo $(cat ./proxy/tuic/client)
echo ""
echo ""
echo ""
echo "SHADOWSOCKS-------SHADOWSOCKS"
qrencode -t UTF8 $(cat ./proxy/shadowsocks/client)
echo $(cat ./proxy/shadowsocks/client)
echo ""
echo ""
echo ""
echo "TROJAN-----------------TROJAN"
qrencode -t UTF8 $(cat ./proxy/trojan/client)
echo $(cat ./proxy/trojan/client)
echo ""
echo ""
echo ""
echo "JUICITY---------------JUICITY"
qrencode -t UTF8 $(cat ./proxy/juicity/client)
echo $(cat ./proxy/juicity/client)
echo ""
echo ""
echo ""
echo "Server setup has been completed, configuration URIs are provided above"
```