#!/bin/bash

npm install

curl -L https://tarantool.io/release/3/installer.sh | bash
sudo apt-get -y install tarantool tt
apt-get install -y tarantool-dev cmake
tt rocks install --tree ./build/.rocks http
tt rocks install --tree ./build/.rocks luatest
tt rocks install --tree ./build/.rocks metrics
tt rocks install --tree ./build/.rocks queue
