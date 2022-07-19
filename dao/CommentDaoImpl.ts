import CommentDao from "./CommentDao";

export default class CommentDaoImpl implements CommentDao {
  private db: string;
  constructor(db: string) {
    this.db = db;
  }

  findAll() {}
  findByHash() {}
  findById() {}
  findByPostId() {}
  findReplies() {}
  insert() {}
  remove() {}
  update() {}
}
