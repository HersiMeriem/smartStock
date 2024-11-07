import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { User } from './user.model'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private dbPath = '/users';

  constructor(private db: AngularFireDatabase) {}

  getUsers(): Observable<User[]> {
    return this.db.list<User>(this.dbPath).valueChanges();
  }

  addUser(user: User): Promise<void> {
    const id = this.db.createPushId();
    return this.db.object(`${this.dbPath}/${id}`).set({ ...user, id });
  }

  updateUser(user: User): Promise<void> {
    if (!user.id) {
      throw new Error('User ID is required for update');
    }
    return this.db.object(`${this.dbPath}/${user.id}`).update(user);
  }

  deleteUser(id: string): Promise<void> {
    return this.db.object(`${this.dbPath}/${id}`).remove();
  }
}
