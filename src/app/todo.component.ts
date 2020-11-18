import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoForm: FormGroup;
  todoArray: FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.todoArray = this.fb.array([]);
    this.todoForm = this.fb.group({ todos: this.todoArray});
  }

  processTodo() {
    const todo = this.todoForm.value;
    console.log(todo);
  }

  addTodo() {
    const todoGroup = this.fb.group({
      date: this.fb.control(new Date()),
      description: this.fb.control(''),
      priority: this.fb.control('')
    });
    this.todoArray.push(todoGroup);
  }
}
