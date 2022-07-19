import CommentService from "../services/CommentService";

export default class CommentController {
  private commentService: CommentService;
  constructor(commentService: CommentService) {
    this.commentService = commentService;
  }

  addComment() {
    this.commentService.addComment();
  }

  editComment() {
    this.commentService.editComment();
  }

  removeComment() {
    this.commentService.removeComment();
  }

  listComments() {
    this.commentService.listComments();
  }
}
