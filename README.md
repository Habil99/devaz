# Developer Azerbaijan

This initial Laravel + Next.JS setup is based on 
- https://github.com/themsaid/ergodnc
- https://github.com/themsaid/ergodnc-nextjs

We appreciate Mohamed Said's hardwork and detailed explanation via https://www.youtube.com/watch?v=Urgstu-mCec




**Laravel Installation**

- $ mkdir ~/projects/devaz

- $ clone https://github.com/themsaid/ergodnc.git via VSCode

- $ npm i

- $ composer i

- $ php artisan key:generate

- $ php artisan migrate

- $ php artisan db:seed

- $ php artisan serve

- copy .env file and configure DB settings:
  
  DB_DATABASE=devaz
  
  DB_USERNAME=root
  
  DB_PASSWORD=

- add these lines to .env file
  
  SANCTUM_STATEFUL_DOMAINS=app.devaz.test
  
  SESSION_DOMAIN=.devaz.test

- $ php artisan optimize:clear


**NextJS Installation**

- $ clone https://github.com/themsaid/ergodnc-nextjs via VSCode
- $ npm i
- $ Change baseURL to 'http://api.devaz.test' on lib/axios.js
- $ npm run dev


**Valet**

- $ composer global require laravel/valet
- $ echo $PATH
- $ export PATH=$PATH:~/.composer/vendor/bin
- $ valet install //It will ask password, write your comp password.
- $ cd ~/projects/devaz/laravel
- $ valet link api.devaz
- $ cd ~/projects/devaz/next
- $ valet proxy app.devaz http://127.0.0.1:3000
- Then you can see 
  - laravel app on http://api.devaz.test
  - next app on http://app.devaz.test
