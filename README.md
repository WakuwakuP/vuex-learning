# vuex-learning

laravel + vue + vue-router + vuex 

## installation

```sh
git clone https://github.com/WakuwakuP/vuex-learning.git vuex-learning
cd vuex-learning
mv .env.docker .env
docker-compose up -d
docker-compose exec php-fpm us laravel -c "cd /var/www/html && composer install"
npm install
npm run prod
```

## js hot compile

```sh
npm run watch
```

## stop

```sh
docker-compose down
```