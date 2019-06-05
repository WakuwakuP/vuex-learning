# vuex-learning

laravel + vue + vue-router + vuex 

## installation

```sh
git clone https://github.com/WakuwakuP/vuex-learning.git vuex-learning
cd vuex-learning
mv .env.docker .env
docker-compose up -d
docker-compose exec php-fpm su laravel -c "cd /var/www/html && composer install"
docker-compose exec php-fpm su laravel -c "cd /var/www/html && php artisan storage:link"
docker-compose exec php-fpm su laravel -c "cd /var/www/html && php artisan migrate"
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