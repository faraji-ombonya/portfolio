export const Article000004 = {
  date: {
    display: "April 30, 2025",
    datetime: "2024-09-30",
    pubDatetime: "2024-09-30",
    pubDatetimeTitle: "April 30th, 2025",
    pubDatetimeDisplay: "Apr. 30, 2025",
  },
  description:
    "To set up ssh access to an EC2 instance, we need a publicly accessible hostname or the IP address of the instance, a username and a private key.",
  slug: "how-to-set-up-ssh-access-to-an-ec2-instance",
  url: "/how-to-set-up-ssh-access-to-an-ec2-instance",
  author: "Faraji Ombonya",
  title: "How to set up SSH access to an EC2 instance",
  lead: "To set up ssh access to an EC2 instance, we need a publicly accessible hostname or the IP address of the instance, a username and a private key.",
  graphic: {
    src: "/how-to-set-up-ssh-access-to-an-ec2-instance/kevin-ache-2JJ3wBHu4_0-unsplash.jpg",
    alt: "server rack",
    caption: "Photo by Kevin Ache on Unsplash",
  },
  linkText: "",
  relatedPosts: [],
  content: [
    { type: "h2", value: "Creating the private key" },
    {
      type: "p",
      value:
        "When launching a new EC2 instance, you need to create a key pair that you will use to securely connect to the instance. ",
    },
    {
      type: "ol",
      value: [
        {
          type: "li",
          value: [
            {
              type: "p",
              value:
                "In the launch an Instance form, under Key pair(login), click “create a new key pair”",
            },
            {
              type: "image",
              src: "/how-to-set-up-ssh-access-to-an-ec2-instance/create-new-key-pair.png",
              alt: "create new key pair",
            },
          ],
        },
        {
          type: "li",
          value: [
            {
              type: "p",
              value:
                "In the modal that follows, add the name of the key pair and then click “create key pair” to create it.",
            },
            {
              type: "image",
              src: "/how-to-set-up-ssh-access-to-an-ec2-instance/create-key-pair-modal.png",
              alt: "create key pair modal",
            },
          ],
        },
        {
          type: "li",
          value:
            "After clicking create key pair, the key will be downloaded on your computer. Store it securely as we will need it to connect to the instance later on.",
        },
        {
          type: "li",
          value: [
            {
              type: "p",
              value:
                "Under the Network settings section. Be sure to use a security group that allows SSH traffic from anywhere.",
            },
            {
              type: "image",
              src: "/how-to-set-up-ssh-access-to-an-ec2-instance/firewall-settings.png",
              alt: "firewall settings",
            },
          ],
        },
      ],
    },
    { type: "h2", value: "Establishing a connection" },
    {
      type: "p",
      value:
        "To establish an SSH connection to the EC2 instance, locate the key that was used to launch the ec2 instance. Make sure that the key is not publicly viewable by running chmod 400 priv-key.pem.",
    },
    {
      type: "p",
      value:
        "If you don't know which key was used to launch the instance, you can go to the EC2 instance dashboard:",
    },
    {
      type: "ol",
      value: [
        {
          type: "li",
          value: [
            {
              type: "p",
              value: "Click the connect button",
            },
            {
              type: "image",
              src: "/how-to-set-up-ssh-access-to-an-ec2-instance/instance-summary-connect.png",
              alt: "instance summary connect",
            },
          ],
        },
        {
          type: "li",
          value: [
            {
              type: "p",
              value:
                "Switch to the SSH client tab, then you will be able to see the name of the file used to launch the ec2 instance.",
            },
            {
              type: "image",
              src: "/how-to-set-up-ssh-access-to-an-ec2-instance/ssh-client-tab-secure.png",
              alt: "ssh client tab secure",
            },
          ],
        },
      ],
    },
    {
      type: "p",
      value:
        "Finally, connect to the ec2 instance by running ssh -i “priv-key.pem”  {USERNAME}@{HOSTNAME}",
    },
  ],
};
