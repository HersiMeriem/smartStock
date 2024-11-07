import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service'; 
import { User } from '../user.model'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userForm: FormGroup;
  users: User[] = [];
  selectedUser: User | null = null;

  constructor(private fb: FormBuilder, private usersService: UsersService) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      contactEmail: ['', [Validators.required, Validators.email]],
      cin: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.usersService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;

      if (this.selectedUser) {
      
        this.usersService.updateUser({ ...user, id: this.selectedUser.id }).then(() => {
          this.loadUsers();
          this.clearForm();
        }).catch(error => console.error('Error updating user:', error));
      } else {
      
        this.usersService.addUser(user).then(() => {
          this.loadUsers();
          this.clearForm();
        }).catch(error => console.error('Error adding user:', error));
      }
    }
  }

  editUser(user: User): void {
    this.selectedUser = user;
    this.userForm.patchValue(user); 
  }

  deleteUser(id: string | undefined): void {
    if (id) { 
      this.usersService.deleteUser(id).then(() => {
        console.log(`User with ID ${id} deleted`);
        this.loadUsers();
      }).catch(error => console.error('Error deleting user:', error));
    } else {
      console.error('User ID is missing for deletion');
    }
  }
  

  clearForm(): void {
    this.userForm.reset();
    this.selectedUser = null;
  }
}
