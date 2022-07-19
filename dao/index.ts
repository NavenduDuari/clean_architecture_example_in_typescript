import CommentDaoImpl from "./CommentDaoImpl";

// instantiate client
// connect client
// create/get db
const db = "db";
const commentDaoImpl = new CommentDaoImpl(db);

export { commentDaoImpl };
