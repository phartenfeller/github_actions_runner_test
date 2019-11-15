FROM ubuntu:eoan

RUN apt-get update && \
  apt-get -y install --no-install-recommends apt-utils && \
  apt-get -y install curl && \ 
  apt-get -y install nodejs && \ 
  apt-get -y install git
