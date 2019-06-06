# vuex-learning

laravel + vue + vue-router + vuex 

## 開発環境構築手順

### 適当なディレクトリに`git clone`する

```sh
git clone ○○/○○.git
```

### Docker for Windows の導入

#### インストール

[Install Docker Desktop for Windows | Docker Documentation](https://docs.docker.com/docker-for-windows/install/)

#### Shared Drive の設定

タスクバーのアイコンのクジラ(`Moby Dock`)を右クリックして

Settings > Shared Drives

Volumeを設定することになるドライブにチェックを入れる

`Firewall Detected`と怒られる場合は以下を参考に設定してください．

[Docker for Windows で Shared Drives のチェックが入らないときの対処法 - Qiita](https://qiita.com/Targityen/items/2c4840fc900d8f9ce11f)

### chocolatey インストール
管理者権限で実行しているPowerShell
```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

### node.jsのインストール

DockerコンテナのVolumeではjsファイルの変更を検知して自動ビルドができないためローカルにもnode.js + npm をインストールする必要がある．

管理者権限で実行しているPowerShell
```ps
choco install nodejs-lts -Version 10.16.0
```

npm のアップデートをする
```sh
npm -i -g npm
```

### Docker環境用dotenvを設定

`.env.docker`を`.env`にリネーム
```sh
mv .env.docker .env
```

### dockerコンテナを立ち上げる

プロジェクトルートで作業を行う
```sh
# 初回はイメージのビルドがあるため時間がかかります
docker-compose up -d
```

### composerでパッケージインストール

```sh
docker-compose exec php-fpm su laravel -c "cd /var/www/html && composer install"
```

### Storage public を リンク
```sh
docker-compose exec php-fpm su laravel -c "cd /var/www/html && php artisan storage:link"
```

### DB マイグレーション
```sh
docker-compose exec php-fpm su laravel -c "cd /var/www/html && php artisan migrate"
```

### javascriptの準備

```sh
npm install
```

### javascript hot compile

```sh
npm run watch
```

## Dockerコンテナの停止

```sh
docker-compose down
```

## 表示確認
- web [http://localhost](http://localhost)
- phpmyadmin [http://localhost:8080](http://localhost:8080)
