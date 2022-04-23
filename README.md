# nuxt-inflearn

4/1 캡틴 판교님의 인프런 nuxt 수강 시작

4/2 서버사이드 렌더링이란? CSR과 SSR에 차이점

4/3 4/2까지의 블로그 글 작성

4/4 nuxt.js install 및 프로젝트 폴더 구조에 대해

4/6 페이지 컴포넌트 결과 에러페이지 정의

자동으로 페이지컴포넌트 라우터경로가 생기지않음 (npm run dev를 한 후에 생김)

4/7 nuxt 라우팅 관련 레이아웃 컴포넌트 nuxt-link 태그

4/8 backend install, json server,axios

layouts 폴더에 오류가있음 해결필요(<Nuxt/> 를 지웠더니 되네?뭐지)

4/9 서버포트 변경 데이터호출방식

4/10 async data eslint
(vue에서 하던 axios방법이 좀다르게 적용되네 기본적으로 사용하던거는 안됨;;;)
(asyncData는 pages폴더에만 적용되는 속성임)

4/11 상품 목록 표시및 구현, 라우팅 및 스타일링

4/12 영상은 안듣고 이미지 렌더링이 느려(정확한 원인x) 해당원인을 찾는중

4/13 음주...

4/14 상품상세페이지 구현을 위한 사전작업

4/15 상품상세정보 구현

4/16 쇼핑상품ui개발

4/17 쇼핑삼풍 ui 마무리,nuxt/vuex 시작

4/18 vuex 마무리

4/19 vuex 추가 공부

4/20 장바구니 추가,조회 api 연동 ,nuxtserverInit

4/21 nuxt 서버 배포방식

4/22 꿔바로우

4/23 마무리 (부족해)

1. https://hjycoinfe.tistory.com/5 (Nuxt.js 개념)
2. https://hjycoinfe.tistory.com/6 (CSR,SSR)

# nuxtInflearn

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
