# 간이서버

- 백엔드 개발자분들이 실제 API를 개발해주시기 전까지 사용할 임시 API입니다.
- 모든 데이터는 faker.js로 데모데이터를 생성하였습니다.

# 사용방법

1. 의존성 모듈을 설치해줍니다.

```
npm install
```

2. 해당 경로에서 서버를 로컬에서 실행해줍니다.

```
node app.js
```

# API명세

- url은 임시로 사용하였습니다.
- endpoint변수에 임의로 넣어두고 실제 api가 개발되면 endpoint를 수정하면 될 것 같습니다.

  - /login
    - get : 유저 정보를 받아옵니다.
  - /board
    - get : board 정보를 받아옵니다.
  - /board/todolist
    - post: todoList를 추가합니다.
      - 필요 데이터: todoList의 title
    - put: todoList의 제목을 수정합니다.
      - 필요 데이터: todoList의 Id, todoList의 title
    - patch: todoList의 순서를 바꿉니다.
      - 필요데이터: todoList1의 id, todoList2의 id,
    - delete: todoList를 삭제합니다.
      - 필요데이터: todoList의 Id,
  - /board/todoItem
    - post: todoItem을 추가합니다.
      - 필요 데이터: todoList의 Id, 추가할 item의 title
    - delete: todoItem을 삭제합니다.
      - 필요 데이터 :todoList의 id, 삭제할 item의 id
    - put : todoList의 content를 수정합니다.
      - 필요데이터: todoList의 id, todoItem의 id, 수정 할 todoItem의 content
    - patch : todoList내부의 두 아이템의 순서를 바꿉니다.
      - 필요데이터: todoList의 id, todoItem1의 id, todoItem2의 id,

# 기타

- <del>포트넘버는 8000을 사용하였습니다. 수정하셔서 사용하시면 될 것 같습니다.</del>
- <strong>cors 에러가 발생하여 proxy 설정을 하였습니다. 포트넘버를 수정시 클라이언트의 package.json에서 url을 수정해주어야 합니다.</strong>
