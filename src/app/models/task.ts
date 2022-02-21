
class Task {
  id:         string;
  title:      string;
  done:       boolean;
  created_at: Date;

  constructor(title: string, id: string) {
    this.id = id;
    this.title = title;
    this.created_at = new Date();
    this.done = false;
  }

  validateTask() {
    this.done = true;
  }

  editTitle(title: string) {
    this.title = title;
  }
}

export { Task };
