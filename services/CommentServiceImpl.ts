import CommentDaoImpl from "../dao/CommentDaoImpl";
import CommentService from "./CommentService";
import Comment from "../model/Comment";

export default class CommentServiceImpl implements CommentService {
  private commentDaoImpl: CommentDaoImpl;

  constructor(commentDaoImpl: CommentDaoImpl) {
    this.commentDaoImpl = commentDaoImpl;
  }

  addComment() {
    const comment = new Comment("this is comment", null);
    this.commentDaoImpl.insert(/*comment*/);
  }
  editComment() {
    this.commentDaoImpl.update();
  }
  removeComment() {
    this.commentDaoImpl.remove();
  }
  listComments() {
    this.commentDaoImpl.findAll();
  }
}
