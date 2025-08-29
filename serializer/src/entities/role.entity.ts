export class Role {
  id: number;
  name: string;

  constructor(partial: Partial<Role>) {
    Object.assign(this, partial);
  }
}
