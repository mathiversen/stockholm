+++
template = "pages/article.html"
title = "Installing a hp printer on ubuntu"
date = 2019-12-14
[taxonomies]
categories = ["hardware"]
tags = ["printer", "ubuntu", "hp"]
+++
Choosing a Linux distro as your OS comes with its pro's and con's. Printers, and I guess a lot of other hardware, is definetly one of those. This article is my short summary of some documentation regarding the hplip package, _HP's Linux Imaging and Printing software_, and how to remove/install it on Ubuntu.

<!-- more -->
## Removing HPLIP
If you've already got HPLIP installed, then make sure to remove it so that we can install a fresh version.

```shell
    sudo apt remove hplip;
    sudo apt remove hplip-data;
```

Remove other non-binary files as well:

```shell
    sudo rm -rf /usr/share/hplip;
    sudo rm -rf /etc/hp;
    sudo rm -rf ~/.hplip;
    sudo rm -rf /var/lib/hp;
```

## Installing HPLIP
Download the latest package from sourceforge:
[Link](https://sourceforge.net/projects/hplip/files/hplip/)

Make the run-file executable:
```shell chmod +x hplip-3.18.6.run ```

Install the hp-plugin if it's not installed:
```shell hp-plugin```

## References
[HPLIP documentation](https://developers.hp.com/hp-linux-imaging-and-printing)
[HP support forum](https://h30434.www3.hp.com/t5/Printer-Software-and-Drivers/Printer-is-not-printing-on-Ubuntu-18-04/td-p/6918741#lineardisplaymessageviewwrapper_0)
