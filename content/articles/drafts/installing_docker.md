+++
template = "pages/article.html"
title = "Getting started with docker & docker-compose"
draft = true
date = 2019-12-14
[taxonomies]
categories = ["programming"]
tags = ["devops", "docker", "tutorial"]
+++
Choosing a Linux distro as your OS comes with its pro's and con's. Printers, and I guess a lot of other hardware, is definetly one of those. This article is my short summary of some documentation regarding the hplip package, _HP's Linux Imaging and Printing software_, and how to remove/install it on Ubuntu.

<!-- more -->
## Installing docker 
Check if docker is already installed and remove old files if that's the case:
```shell
    sudo apt-get remove docker docker-engine docker.io
```

Install a fresh version of docker:
```shell
    sudo apt install docker.io;
```

Start and automate docker:
```shell
    sudo systemctl start docker;
    sudo systemctl enable docker;
```

## Installing docker-composer
Check the latest stable release in the docker repo:
[Link](https://github.com/docker/compose/releases)

Run the below command and replace the relase name:
```shell
    sudo curl -L "https://github.com/docker/compose/releases/download/<RELEASE_NAME_HERE>/docker-compose-"(uname -s)"-"(uname -m) -o /usr/local/bin/docker-compose
```
Make the binary executable:
```shell chmod +x /usr/local/bin/docker-compose```

## References
[Install docker on ubuntu 18.04](https://phoenixnap.com/kb/how-to-install-docker-on-ubuntu-18-04)
[Installing docker compose](https://docs.docker.com/compose/install/)
