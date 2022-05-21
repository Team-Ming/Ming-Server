# Ming Server

## 서비스 이름과 소개

서비스명 : 밍기적🐹

서비스 한 줄 소개 :
기억하고 싶은 것을 적음으로써,
'밍'과 함께 이루는 일상의 작은 기적 :)

서비스 소개 : 다음 날 기억하고 싶은 것(내일 챙겨야 하는 준비물, 아침에 보고 싶은 나를 위한 멘트 등)을, 까먹지 않고 좀 더 잘 기억할 수 있도록 돕는 서비스입니다. 사용자는 자기 전에 기억하고 싶은 것을 적고, 다음 날 일어나서 그 내용을 그대로 한 번씩 따라 적음으로써 내용을 떠올립니다. 사용자가 내용을 모두 따라 적으면 자고 있던 귀여운 ‘밍’을 일으켜 일상의 작은 기적을 이룰 수 있게 됩니다.

## 각자 개발 담당 부분
1. 오늘의 기적 조회하기 - Jionee
2. 내일의 기적 작성하기 - Hyeonz
3. 전체 기적 조회하기 - Hyeonz

## 코드 컨벤션
<details>
<summary>코드 컨벤션</summary>
<div markdown="1">       

### 명명규칙(Naming Conventions)

1. 이름으로부터 의도가 읽혀질 수 있게 쓴다.
2. 오브젝트, 함수, 그리고 인스턴스에는 `camelCase`를 사용한다.
3. 클래스나 constructor에는 `PascalCase`를 사용한다.
4. 함수 이름은 동사 + 명사 형태로 작성한다.
ex) `postUserInformation( )`
5. 약어 사용은 최대한 지양한다.

### 블록(Blocks)

1. 한줄이어도 중괄호({})를 사용한다.
- ex)
    
    ```jsx
    // bad
    if (test) return false;
    
    // good
    if (test) {
      return false;
    }
    ```
    
2. 복수행 블록의 `if` 와 `else` 를 이용하는 경우 `else` 는 `if` 블록 끝의 중괄호( } )와 같은 행에 위치시킨다.
- ex)
    
    ```jsx
    // bad
    if (test) {
      thing1();
      thing2();
    } 
    else {
      thing3();
    }
    
    // good
    if (test) {
      thing1();
      thing2();
    } else {
      thing3();
    }
    
    ```
    

### 코멘트(Comments)

1. 복수형의 코멘트는 `/** ... */` 를 사용한다.
- ex)
    
    ```jsx
    // good
    /**
     * @param {String} tag
     * @return {Element} element
     */
    function make(tag) {
      // ...stuff...
    
      return element;
    }
    
    ```
    
2. 단일 행의 코멘트에는 `//` 을 사용하고 코멘트를 추가하고 싶은 코드의 상부에 배치한다. 그리고 코멘트의 앞에 빈 행을 넣는다.
- ex)
    
    ```jsx
    // bad
    const active = true; // is current tab
    
    // good
    // is current tab
    const active = true;
    ```
    

### 문자열(Strings)

1. 문자열에는 싱크쿼트 `''` 를 사용한다.
- ex)
    
    ```jsx
    // bad
    const name = "Capt. Janeway";
    
    // good
    const name = 'Capt. Janeway';
    ```
    
2. 프로그램에서 문자열을 생성하는 경우는 문자열 연결이 아닌 `template strings`를 이용한다.
- ex)
    
    ```jsx
    // bad
    function sayHi(name) {
      return 'How are you, ' + name + '?';
    }
    
    // bad
    function sayHi(name) {
      return ['How are you, ', name, '?'].join();
    }
    
    // good
    function sayHi(name) {
      return `How are you, ${name}?`;
    }
    
    ```
    

### 함수(Functions)

1. 화살표 함수를 사용한다.
- ex)
    
    ```jsx
     var arr1 = [1, 2, 3];
      var pow1 = arr.map(function (x) { // ES5 Not Good
        return x * x;
      });
    
      const arr2 = [1, 2, 3];
      const pow2 = arr.map(x => x * x); // ES6 Good
    ```
    

### 조건식과 등가식(Comparison Operators & Equality)

1. `==` 이나 `!=` 보다 `===` 와 `!==` 을 사용한다.
2. 단축형을 사용한다.
- ex)
    
    ```jsx
    // bad
    if (name !== '') {
      // ...stuff...
    }
    
    // good
    if (name) {
      // ...stuff...
    }
    ```
    
3. 비동기 함수를 사용할 때 `Promise`함수의 사용은 지양하고 `async`, `await`를 쓰도록 한다

</div>
</details>

## 브랜치 전략

<aside>
🌸 git branch 전략

`main branch` : 배포 단위 branch

`develop branch` : 주요 개발 branch, main merge 전 거치는 branch

`feature branch`: 각자 개발 branch

- 할 일 issue 등록 후 issue 번호로 branch 생성 후 작업
    - ex) feature/#`issue num`
- 해당 branch 작업 완료 후 PR 보내기
    - 항상 local에서 충돌 해결 후 → remote에 올리기
    - reviewer에 서로 tag후 code-review
    - comment 전 merge 불가!

 ### branch 구조

```jsx
- main
- develop
- feature
   ├── #1
   └── #2
```

</aside>

## 커밋 컨벤션 

<aside>
🌸 git commit message convention

`ex) [FEAT] Add user api files` 

```ruby
- [CHORE]: 빌드 업무 수정, 패키지 매니지 수정
- [FEAT] : 새로운 기능 구현
- [FIX] : 버그, 오류 해결
- [REFACTOR] : 파일 혹은 폴더 삭제, 프로젝트 내 파일이나 코드의 이동, 코드 수정
- [DOCS] : README나 WIKI 등의 문서 개정
- [RENAME] : 파일 이름의 변경
- [STYLE] : 세미콜론 누락, 코드 포맷팅, 코드 변경이 없는 경우
```

</aside>

## 폴더링
```jsx
📦 config                    // port, mongoURI 등 설정
 ┗ 📜 index.ts

📦 controllers               // service에서 처리된 로직들을 전달 받아 response해줌
 ┣ 📜 index.ts
 ┗ 📜 MiracleController.ts

📦 interfaces                // type interface 정의
 ┗ 📂 common
 ┃ ┣ 📜 PostBaseResponseDto.ts
 ┗ 📂 miracle
   ┣ 📜 MiracleCreateDto.ts
   ┣ 📜 MiracleInfo.ts┣
   ┗ 📜 MiracleCreateDto.ts
   📂 user
   ┣ 📜 UserInfo.ts
📦 loaders              
 ┗ 📜 db.ts

📦 middlewares         
 ┗ 📜 auth.ts            

📦 models                    // mongoose.Schema 정의
 ┗ 📂 miracle
   ┗ 📜 Miracle.ts
   📂 user
   ┗ 📜 User.ts

📦 modules            
 ┗ 📜 util.ts 
 ┗ 📜 statusCode.ts
 ┗ 📜 responseMessage.ts

📦 routes                    // endpoint 정의
 ┣ 📜 index.ts
 ┗ 📜 MiracleRouter.ts 

📦 services                  // 상세 구현, controller로 전달 됨
 ┣ 📜 index.ts
 ┗ 📜 MiracleService.ts
```


## Collection
### Miracle
```
const MiracleSchema = new mongoose.Schema(
  {
    writer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    content: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);
```

### User
```
const UserSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    }
});
```

## Package.json
```
{
  "name": "node-typescript-init",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon",
    "api-docs": "swagger-cli bundle ./src/swagger/openapi.yaml --outfile build/swagger.yaml --type yaml",
    "predev": "npm run api-docs",
    "build": "tsc && node dist"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/express": "^4.17.13",
    "@types/mongoose": "^5.11.97",
    "@types/node": "^17.0.25",
    "@types/swagger-ui-express": "^4.1.3",
    "@types/yamljs": "^0.2.31",
    "nodemon": "^2.0.15",
    "ts-node": "^10.7.0",
    "typescript": "^4.6.3"
  },
  "dependencies": {
    "dayjs": "^1.11.2",
    "dotenv": "^16.0.0",
    "express": "^4.17.3",
    "express-validator": "^6.14.0",
    "mongoose": "^6.3.1",
    "swagger-cli": "^4.0.4",
    "swagger-ui-express": "^4.4.0",
    "yamljs": "^0.3.0"
  }
}

```

## Server Architecture
<img width="997" alt="스크린샷 2022-05-22 오전 6 44 04" src="https://user-images.githubusercontent.com/49470328/169669919-ec41c506-200a-40b6-8c96-29f02ad04bbd.png">


## API 명세서

https://placid-cathedral-2f0.notion.site/API-9296ee564e514f389f12766cbb309466

