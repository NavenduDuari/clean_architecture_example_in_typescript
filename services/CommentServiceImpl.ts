import CommentDao from "../dao/CommentDao";
import CommentService from "./CommentService";
import Comment from "../model/Comment";

export default class CommentServiceImpl implements CommentService {
  private commentDao: CommentDao;

  constructor(commentDao: CommentDao) {
    this.commentDao = commentDao;
  }

  addComment() {
    const comment = new Comment("this is comment", null);
    this.commentDao.insert(/*comment*/);
  }
  editComment() {
    this.commentDao.update();
  }
  removeComment() {
    this.commentDao.remove();
  }
  listComments() {
    this.commentDao.findAll();
  }
}
