import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task.schema';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name) private taskModel: Model<Task>  // Inject Task model
  ) {}

  // Create a new task for the user
  async createTask(title: string, userId: string) {
    return this.taskModel.create({ title, userId });
  }

  // Fetch tasks belonging to the authenticated user
  async getTasks(userId: string) {
    return this.taskModel.find({ userId });
  }
}