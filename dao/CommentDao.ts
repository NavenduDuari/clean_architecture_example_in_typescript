export default interface CommentDao {
  findAll: () => void;
  findByHash: () => void;
  findById: () => void;
  findByPostId: () => void;
  findReplies: () => void;
  insert: () => void;
  remove: () => void;
  update: () => void;
}
