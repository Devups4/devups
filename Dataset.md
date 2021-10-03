# 1. 게시글

- 좋아요랑 댓글 로직은 아직 생각을 못 해봐서 일단 대강 형태만 정해보았습니다.
- jwt를 비롯한 인증은 포함하지 않았습니다.

```javascript
let data = {
  userId: 'Iz-cCF6DS', //작성자의 id,
  name: '박성현', //작성자의 name,
  id: 'k8c-Cqyw', //게시글의 id,
  timeStamp: '2021-09-20', //게시글의 작성 시간
  title: '배고파요', //게시글의 제목,
  sum: '배고픔에 대해서 알아봅시다. 가짜 배고픔은 아닐까요?', //게시글의 요약 내용
  body: '오늘은 배고픔에 대해서 알아봅시다. 지금 시간은 오후 6시로 저는 지금까지 3끼를 먹었는데요. 아침으로는 순두부 찌개를 먹었습니다. 그러고 점심으로 돈까스를 먹었습니다. 그러고 나서 점심 겸 저녁으로 돈까스를 먹었습니다. 그랬더니 6시인 지금 전혀 배고프지 않고 너무 배부릅니다.', //게시글의 전체 내용
  hashtag: [{ value: '#떡볶이' }, { value: '#돈까스' }, { value: '#마라탕' }], //해시태그 데이터
  comments: [
    {
      id: 'asdfasdf',
      writerId: 'al80a-h9',
      name: '이수호',
      content: '저도 돈까스 먹고싶어요',
      reply: [
        { id: 'ajvuhui79', writerId: 'Iz-cCF6DS', name: '박성현', content: '집 앞에서 사드세요' },
        { id: 'jiahuic979', writerId: 'al80a-h9', name: '이수호', content: '네' },
      ],
    },
  ], //댓글 //댓글 작성자 id, 댓글 작성자 name 댓글의 id, 댓글의 내용, 대댓글
  like: ['Iz-cCF6DS', 'asdf9fhs9'], //좋아요 누른 사람의 id
};
```

## - UserPage

- 유저페이지에서는 게시글의 요약정보의 배열을 랜더링합니다.
- 서버로 전송하는 데이터
  // Iz-cCF6DS라는 아이디의 유저 게시글을 0번부터 20개 요청

  ```javascript
  let data={
      userId:"Iz-cCF6DS",//게시글을 작성한 유저의 아이디
      startIndex:0 //몇 번 게시글부터 가져올지
      size:20 //게시글의 개수
      }
  ```

- 반환될 데이터

  - 반환형은 배열으로 배열 중 하나의 원소를 표현해봤습니다.

  ```javascript
  let data = {
    userId: 'Iz-cCF6DS', //작성자의 id,
    name: '박성현', //작성자의 name,
    id: 'k8c-Cqyw', //게시글의 id,
    timeStamp: '2021-09-20', //게시글의 작성 시간
    title: '배고파요', //게시글의 제목,
    sum: '배고픔에 대해서 알아봅시다. 가짜 배고픔은 아닐까요?', //게시글의 요약 내용
    hashtag: [{ value: '#떡볶이' }, { value: '#돈까스' }, { value: '#마라탕' }], //해시태그 데이터
    numOfComment: 5, //댓글 수
    NumOfLike: 65, //좋아요 수
    isLike: true, //내가 좋아요를 눌렀는지
  };
  ```

## - UserPage/단일 Article

- 단일 아티클에서는 게시글 전체 정보를 랜더링합니다.

- 서버로 전송하는 데이터
  // Iz-cCF6DS라는 아이디의 유저의 ktlgskt5909이라는 게시글을 요청

      ```javascript
      let data = {
      userId: 'Iz-cCF6DS', //게시글을 작성한 유저의 아이디
      articleId: 'ktlgskt5909',
      };
      ```

- 반환될 데이터

  - 반환형은 배열이 아닌 단일 객체입니다.
  - sum(요약) 이 전체 내용으로 바뀌었습니다.
  - 또한 다음 게시글에 대한 정보가 추가되었습니다.

```javascript
let data = {
  userId: 'Iz-cCF6DS', //작성자의 id,
  name: '박성현', //작성자의 name,
  id: 'k8c-Cqyw', //게시글의 id,
  timeStamp: '2021-09-20', //게시글의 작성 시간
  title: '배고파요', //게시글의 제목,
  body: '지금 시간은 오후 6시로 저는 지금까지 3끼를 먹었는데요. 아침으로는 순두부 찌개를 먹었습니다. 그러고 점심으로 돈까스를 먹었습니다. 그러고 나서 점심 겸 저녁으로 돈까스를 먹었습니다. 그랬더니 6시인 지금 전혀 배고프지 않고 너무 배부릅니다.', //게시글의 전체 내용
  hashtag: [{ value: '#떡볶이' }, { value: '#돈까스' }, { value: '#마라탕' }], //해시태그 데이터
  related: {
    prev: { id: 'kasdckja', title: '뭐먹지' },
    next: { id: 'aevhioaemfvoim', title: '배부르다' },
  },
  //다음 게시글 데이터
  comments: [], //댓글
  like: [], //좋아요
};
```

## - Feed

- 피드에서는 자신과 팔로우 관계에 있는 유저의 게시글을 요청합니다.
- 서버로 보낼 데이터

  ```javascript
  let data = {
    userId: 'Iz-cCF6DS', //유저의 아이디
  };
  ```

- 반환될 데이터

  - 게시글의 요약본을 비롯한 정보는 UserPage와 같을 것 같습니다.

  - Trending

  - 트렌딩은 홈페이지로 최근(시간 설정 필요) 좋아요를 많이 받은 게시글을 요청합니다.
  - 서버로 보낼 데이터

    ```javascript
    let data = {
      userId: 'Iz-cCF6DS', //유저의 아이디
    };
    ```

  - 반환될 데이터
    - 게시글의 요약본을 비롯한 정보는 UserPage와 같을 것 같습니다.

## - Search(유저페이지에서)

- 해당 유저의 게시글과 검색 키워드를 비교하여 해당되는 게시글의 목록을 랜더링해줍니다.

  - 서버로 보낼 데이터

    ```javascript
    let data = {
      userId: 'asdf0snadfc8',
      title: '배고파요',
    };
    ```

- 반환될 데이터
  - 게시글의 요약본을 비롯한 정보는 UserPage와 같을 것 같습니다.

# 2. 사용자

```javascript
let user = {
  userId: 'Iz-cCF6DS', //사용자의 id,
  name: '박성현', //사용자의 name,
  email: 'pshdev1030@gmail.com', //사용자의 email
  follow: [
    {
      id: 'asdfc9c',
      email: 'asdkf@gmail.com',
      name: '김철수',
    },
    {
      id: 'al80a-h9',
      email: 'suho@gmail.com',
      name: '이수호',
    },
  ],
  following: [
    {
      id: 'asdfc9c',
      email: 'asdkf@gmail.com',
      name: '김철수',
    },
    {
      id: 'al80a-h9',
      email: 'suho@gmail.com',
      name: '이수호',
    },
  ],
};
```

## - LogIn

- 해당 유저의 게시글과 검색 키워드를 비교하여 해당되는 게시글의 목록을 랜더링해줍니다.

  - 서버로 보낼 데이터

    ```javascript
    let data = {
      userId: 'asdf0snadfc8',
      title: '배고파요',
    };
    ```

- 반환될 데이터

  ```javascript
  let user = {
    userId: 'Iz-cCF6DS', //사용자의 id,
    name: '박성현', //사용자의 name,
    email: 'pshdev1030@gmail.com', //사용자의 email
    follow: [
      {
        id: 'asdfc9c',
        email: 'asdkf@gmail.com',
        name: '김철수',
      },
      {
        id: 'al80a-h9',
        email: 'suho@gmail.com',
        name: '이수호',
      },
    ],
    following: [
      {
        id: 'asdfc9c',
        email: 'asdkf@gmail.com',
        name: '김철수',
      },
      {
        id: 'al80a-h9',
        email: 'suho@gmail.com',
        name: '이수호',
      },
    ],
  };
  ```

### - 논의점

    - 데이터가 몇 만개라고 가정하면 팔로잉,팔로워 댓글 ,대댓글등에도 데이터를 동적으로 요청하는 로직이 있으면 좋을 것 같습니다.
    - 게시글과 포로필에 사진도 추가해야할 것 같습니다.
    - 게시글에 프로필을 추가할 경우 게시글의 content부분을 HTML코드로 저장하고 게시글에 img:[] 프로퍼티를 추가하면 될 것 같습니다.
