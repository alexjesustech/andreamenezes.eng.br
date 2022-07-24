FROM httpd:2.4-bullseye
LABEL maintainer="Alex Jesus <alexjesus.tech@gmail.com>" description="Disponibilizando site com Apache"

RUN packages='nano' \
  && set -eux \
  && apt-get update \
  && apt-get install -y --no-install-recommends $packages \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

RUN sed -i \
    -e 's/#LoadModule rewrite_module/LoadModule rewrite_module/' \
    -e 's/#ServerName www.example.com:80/ServerName localhost:80/' \
    -e '/<Directory "\/usr\/local\/apache2\/htdocs">/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' \
    /usr/local/apache2/conf/httpd.conf