export default class Comment {
  private author: string;
  private createdAt: number;
  private updatedAt: number;
  private id: string;
  private postId: string;
  private published: boolean;
  private replyToId: string | null;
  private text: string;

  constructor(text: string, replyToId: string | null) {
    this.author = "navendu";
    this.createdAt = Date.now();
    this.updatedAt = Date.now();
    this.id = "some random id"; //UUID();
    this.postId = "some post id"; //UUID()
    this.published = false;
    this.replyToId = replyToId;
    this.text = text;
  }
}
