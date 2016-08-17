#!/bin/bash

# Base instalation
sudo apt-get update -y
sudo apt-get install -y git-core curl vim apache2
sudo apt-get install -y build-essential openssl libssl-dev

# Nodejs and featured package install
curl -sL https://deb.nodesource.com/setup_6.x | bash -
sudo apt-get install -y nodejs

# Node packages installing
npm install -g gulp-cli yo grunt bower
