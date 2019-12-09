FROM ubuntu:eoan

COPY . .

RUN apt-get update && \
  apt-get -y install --no-install-recommends apt-utils && \
  apt-get -y install curl

RUN apt-get -y install  liblttng-ust0 libkrb5-3 zlib1g && \
  apt-get -y install libssl1.1$ || apt-get install -y libssl1.0.2$ || apt install -y libssl1.0.0$ && \
  apt-get install -y libicu63 || apt-get install -y libicu60 || apt install -y libicu57 || apt install -y libicu55 || apt install -y libicu52

RUN curl -sL https://deb.nodesource.com/setup_13.x | bash

RUN apt-get -y install nodejs && \ 
  apt-get -y install git

RUN npm install -g yarn
