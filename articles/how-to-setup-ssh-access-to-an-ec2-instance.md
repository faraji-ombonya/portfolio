---
date: "2024-09-30"
title: "How to set up SSH access to an EC2 instance"
description: "To set up ssh access to an EC2 instance, we need a publicly accessible hostname or the IP address of the instance, a username and a private key."
author: "Faraji Ombonya"
---

# How to set up SSH access to an EC2 instance

To set up ssh access to an EC2 instance, we need a publicly accessible
hostname or the IP address of the instance, a username and a private key.

![server rack](/how-to-set-up-ssh-access-to-an-ec2-instance/kevin-ache-2JJ3wBHu4_0-unsplash.jpg)
_Photo by Kevin Ache on Unsplash_

## Creating the private key

When launching a new EC2 instance, you need to create a key pair that you will
use to securely connect to the instance.

1. In the launch an Instance form, under Key pair(login), click
   `create a new key pair`

   ![create new key pair](/how-to-set-up-ssh-access-to-an-ec2-instance/create-new-key-pair.png)

2. In the modal that follows, add the name of the key pair and then click
   `create key pair` to create it.

   ![create key pair modal](/how-to-set-up-ssh-access-to-an-ec2-instance/create-key-pair-modal.png)

3. After clicking create key pair, the key will be downloaded on your
   computer. Store it securely as we will need it to connect to the instance later on.

   ![firewall settings](/how-to-set-up-ssh-access-to-an-ec2-instance/firewall-settings.png)

## Establishing a connection

To establish an SSH connection to the EC2 instance, locate the key that was
used to launch the ec2 instance. Make sure that the key is not publicly
viewable by running `chmod 400 priv-key.pem`.

If you don't know which key was used to launch the instance, you can go to the
EC2 instance dashboard:

1. Click the connect button

   ![instance summary connect](/how-to-set-up-ssh-access-to-an-ec2-instance/instance-summary-connect.png)

2. Switch to the SSH client tab, then you will be able to see the name of the
   file used to launch the ec2 instance.

   ![ssh client tab secure](/how-to-set-up-ssh-access-to-an-ec2-instance/ssh-client-tab-secure.png)

Finally, connect to the ec2 instance by running
`ssh -i “priv-key.pem”  {USERNAME}@{HOSTNAME}`
