FROM php:fpm

# For composer
RUN apt-get update \
  && apt-get install -y libzip-dev zlib1g-dev \
  && docker-php-ext-install zip

# Install composer
RUN curl -sS https://getcomposer.org/installer | php \
  && mv composer.phar /usr/local/bin/composer \
  && chmod +x /usr/local/bin/composer

# Set composer environment
ENV COMPOSER_ALLOW_SUPERUSER 1
ENV COMPOSER_HOME /composer
ENV PATH $PATH:/composer/vendor/bin

# Install laravel installer
RUN composer global require "laravel/installer"

# PHP's DB setting
RUN apt-get update \
  && apt-get install apt-utils apt-file git wget unzip libcurl4-gnutls-dev libicu-dev libmcrypt-dev libvpx-dev libjpeg-dev libpng-dev libxpm-dev zlib1g-dev libfreetype6-dev libxml2-dev libexpat1-dev libbz2-dev libgmp3-dev libldap2-dev unixodbc-dev libpq-dev libsqlite3-dev libaspell-dev libsnmp-dev libpcre3-dev libtidy-dev -yqq

RUN docker-php-ext-install mbstring pdo_mysql curl json intl xml bz2 opcache bcmath \
  && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
  && docker-php-ext-install -j$(nproc) gd

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - \
  && apt-get update \
  && apt-get install -y nodejs

#user追加
RUN useradd -m -s /bin/bash -u 1000 laravel \
  && sed -i 's/user\ \=\ www-data/user\ \=\ laravel/g' /usr/local/etc/php-fpm.d/www.conf \
  && sed -i 's/group\ \=\ www-data/group\ \=\ laravel/g' /usr/local/etc/php-fpm.d/www.conf \
  && mkdir /data \
  && chmod 777 /data

WORKDIR /var/www/html
