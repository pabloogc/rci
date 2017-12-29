# Raspberry CI
Dockerized raspberry CI and useful services.

Install docker executing this script: [get.docker](https://get.docker.com/)  
Install docker-compose with pip (`pip install docker-compose`)

Current services:
* Nginx: Used as a reverse proxy for all the services. Only port 80 is open, subdomains proxy to the other services in the raspberry. Check nginx.conf.
* Jenkins (jenkins.*): Latest version without plugins. Modify docker-compose file to set a permanent storage for jenkins as well as ssh keys.
* Deluge (deluge.*): Torrent server.

To access over the internet you will need a dns service like [duckdns](https://www.duckdns.org).
