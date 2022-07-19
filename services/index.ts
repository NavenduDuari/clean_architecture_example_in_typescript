// import all the usecases/services and expose them from this file

import CommentServiceImpl from "./CommentServiceImpl";
import { commentDaoImpl } from "../dao";

const commentServiceImpl = new CommentServiceImpl(commentDaoImpl);

export { commentServiceImpl };
