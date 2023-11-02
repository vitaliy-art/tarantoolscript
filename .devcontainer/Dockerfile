ARG VARIANT="2.11.0-ubuntu20.04"
FROM tarantool/tarantool:${VARIANT}

RUN apt-get -y update && apt-get -y upgrade
RUN apt-get -y install cmake

RUN tarantoolctl install luatest
