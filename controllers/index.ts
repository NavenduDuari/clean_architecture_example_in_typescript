import CommentController from "./CommentController";
import { commentServiceImpl } from "../services";

const commentController = new CommentController(commentServiceImpl);

export { commentController };
