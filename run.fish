#! /usr/bin/fish

set local_ip (hostname -I | awk '{print $1}')

echo "Base url: $local_ip"

zola serve --interface 0.0.0.0 --port 1337 --base-url $local_ip