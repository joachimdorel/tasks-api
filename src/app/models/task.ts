
class Task {
  id:         string;
  title:      string;
  done:       boolean;
  createdAt: Date;

  constructor(title: string, id: string) {
    this.id = id;
    this.title = title;
    this.createdAt = new Date();
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
