const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const faker = require("faker");
const shortid = require("shortid");

let user = {
  id: shortid.generate(),
  email: faker.internet.email(),
  name: faker.name.findName(),
  follow: [
    {
      id: shortid.generate(),
      email: faker.internet.email(),
      name: faker.name.findName(),
    },
    {
      id: shortid.generate(),
      email: faker.internet.email(),
      name: faker.name.findName(),
    },
    {
      id: shortid.generate(),
      email: faker.internet.email(),
      name: faker.name.findName(),
    },
    {
      id: shortid.generate(),
      email: faker.internet.email(),
      name: faker.name.findName(),
    },
    {
      id: shortid.generate(),
      email: faker.internet.email(),
      name: faker.name.findName(),
    },
  ],
  following: [
    {
      id: shortid.generate(),
      email: faker.internet.email(),
      name: faker.name.findName(),
    },
    {
      id: shortid.generate(),
      email: faker.internet.email(),
      name: faker.name.findName(),
    },
    {
      id: shortid.generate(),
      email: faker.internet.email(),
      name: faker.name.findName(),
    },
    {
      id: shortid.generate(),
      email: faker.internet.email(),
      name: faker.name.findName(),
    },
    {
      id: shortid.generate(),
      email: faker.internet.email(),
      name: faker.name.findName(),
    },
  ],
};

let article = {
  id: shortid.generate(),
  user: user.email,
  title: faker.name.title(),
  content: faker.lorem.paragraph(),
  hashtag: [
    { value: faker.lorem.word(), num: 1 },
    { value: faker.lorem.word(), num: 1 },
    { value: faker.lorem.word(), num: 1 },
  ],
};

let todo_Board = {
  id: shortid.generate(),
  user: user.email,
  title: faker.name.title(),
  todoList: [
    {
      id: shortid.generate(),
      title: faker.name.title(),
      board: [
        { id: shortid.generate(), content: faker.lorem.words() },
        { id: shortid.generate(), content: faker.lorem.words() },
        { id: shortid.generate(), content: faker.lorem.words() },
        { id: shortid.generate(), content: faker.lorem.words() },
      ],
    },
    {
      id: shortid.generate(),
      title: faker.name.title(),
      board: [
        { id: shortid.generate(), content: faker.lorem.words() },
        { id: shortid.generate(), content: faker.lorem.words() },
        { id: shortid.generate(), content: faker.lorem.words() },
        { id: shortid.generate(), content: faker.lorem.words() },
      ],
    },
  ],
};

app.delete("/user/follow", function (req, res) {
  const userId = req.body.userId;
  const followUserId = req.body.followUserId;

  const followUserIdx = user.follow.findIndex(
    (user) => user.id === followUserId
  );
  if (followUserIdx === -1) res.send("잘못된 요청입니다.");
  user.follow.splice(followUserIdx, 1);
  res.send("팔로우 삭제가 완료되었습니다.");
});
//팔로우 삭제
// 필요 데이터: 사용자의 id , 삭제할 유저의 id

app.get("/article", function (req, res) {
  res.send(article);
});

app.delete("/user/following", function (req, res) {
  const userId = req.body.userId;
  const followingUserId = req.body.followingUserId;

  const followingUserIdx = user.following.findIndex(
    (user) => user.id === followingUserId
  );
  if (followingUserIdx === -1) res.send("잘못된 요청입니다.");
  user.following.splice(followingUserIdx, 1);

  res.send("팔로잉 삭제가 완료되었습니다.");
});
//팔로d잉 삭제
// 필요 데이터: 사용자의 id , 삭제할 유저의 id

app.get("/login", function (req, res) {
  res.send(user);
});
// 유저 정보 받아오기
// done

app.get("/board", function (req, res) {
  res.send(todo_Board);
});
// board 정보 받아오기
// done

app.post("/board/todolist", function (req, res) {
  const title = req.body.title;
  todo_Board.todoList.push({ id: shortid.generate(), title, board: [] });
  res.send("새 todoList가 추가되었습니다.");
});
// 새 투두 리스트 만들기 필요데이터:title
// done

app.put("/board/todolist", function (req, res) {
  const listId = req.body.listId;
  const title = req.body.title;

  const listIndex = todo_Board.todoList.findIndex((list) => list.id === listId);
  if (listIndex === -1) res.send("잘못된 요청입니다.");
  todo_Board.todoList[listIndex].title = title;
  res.send("todoList가 수정되었습니다.");
});
// 투두리스트 제목 수정 필요데이터: 리스트의 Id 리스트의title
// done

app.patch("/board/todolist", function (req, res) {
  const toId = req.body.toId;
  const fromId = req.body.fromId;

  const toListIndex = todo_Board.todoList.findIndex((list) => list.id === toId);

  const fromListIndex = todo_Board.todoList.findIndex(
    (list) => list.id === fromId
  );
  if (toListIndex === -1 || fromListIndex === -1)
    res.send("잘못된 요청입니다.");
  const fromList = JSON.parse(
    JSON.stringify(todo_Board.todoList[fromListIndex])
  );

  const tmpList = JSON.parse(JSON.stringify(todo_Board.todoList[toListIndex]));

  todo_Board.todoList.splice(toListIndex, 1, fromList);
  todo_Board.todoList[fromListIndex] = tmpList;

  res.send("순서 변경이 완료되었습니다.");
});
// 투두리스트의 순서 변경 필요 데이터: 리스트1의 id, 리스트2의 id
// done

app.delete("/board/todolist", function (req, res) {
  const listId = req.body.listId;

  const listIndex = todo_Board.todoList.findIndex((list) => list.id === listId);
  if (listIndex === -1) res.send("잘못된 요청입니다.");
  todo_Board.todoList.splice(listIndex, 1);
  res.send("todoList가 삭제되었습니다.");
});
// 투두리스트 삭제 필요데이터: 리스트의 Id
// done

app.post("/board/todoitem", function (req, res) {
  const listId = req.body.listId;
  const content = req.body.content;
  todo_Board.todoList
    .find((ele) => ele.id === listId)
    .board.push({ id: shortid.generate(), content });
  res.send("추가가 완료되었습니다.");
});
// 새 투두리스트 아이템 만들기 필요 데이터: 리스트의 id,content
// done

app.delete("/board/todoitem", function (req, res) {
  const listId = req.body.listId;
  const itemId = req.body.itemId;

  const listIndex = todo_Board.todoList.findIndex((list) => list.id === listId);
  const itemIndex = todo_Board.todoList[listIndex].board.findIndex(
    (item) => item.id === itemId
  );

  if (listIndex === -1 || itemIndex === -1) res.send("잘못된 요청입니다.");
  todo_Board.todoList[listIndex].board.splice(itemIndex, 1);
  res.send("삭제가 완료되었습니다.");
});
// 투두 리스트 아이템 삭제 필요 데이터: 리스트의 id, 아이템의 id
// done

app.put("/board/todoitem", function (req, res) {
  const listId = req.body.listId;
  const itemId = req.body.itemId;
  const content = req.body.content;

  const listIndex = todo_Board.todoList.findIndex((list) => list.id === listId);
  const itemIndex = todo_Board.todoList[listIndex].board.findIndex(
    (item) => item.id === itemId
  );
  if (listIndex === -1 || itemIndex === -1) res.send("잘못된 요청입니다.");
  todo_Board.todoList[listIndex].board[itemIndex].content = content;
  res.send("수정이 완료되었습니다.");
});
// 투두 리스트 아이템 수정 필요 데이터: 리스트의 id, 아이템의 id 아이템의 content
// done

app.patch("/board/todoitem", function (req, res) {
  const listId = req.body.listId;
  const toId = req.body.toId;
  const fromId = req.body.fromId;

  const listIndex = todo_Board.todoList.findIndex((list) => list.id === listId);
  const toItemIndex = todo_Board.todoList[listIndex].board.findIndex(
    (item) => item.id === toId
  );

  const fromItemIndex = todo_Board.todoList[listIndex].board.findIndex(
    (item) => item.id === fromId
  );

  if (listIndex === -1 || toItemIndex === -1 || fromItemIndex)
    res.send("잘못된 요청입니다.");
  const fromItem = todo_Board.todoList[listIndex].board[fromItemIndex];

  const tmpItem = todo_Board.todoList[listIndex].board[toItemIndex];

  todo_Board.todoList[listIndex].board.splice(toItemIndex, 1, fromItem);
  todo_Board.todoList[listIndex].board[fromItemIndex] = tmpItem;

  res.send("순서 변경이 완료되었습니다.");
});
// 투두리스트 아이템의 순서 변경 필요 데이터: 리스트의 id 아이템1의 id, 아이템2의 id
// done

app.listen(port, () => {
  console.log("toy server is running at port number 8000");
});
