import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task.schema';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name) private taskModel: Model<Task>  // ✅ Inject Task model
  ) {}

  async createTask(title: string, userId: string) {
    return this.taskModel.create({ title, userId });
  }

  async getTasks(userId: string) {
    return this.taskModel.find({ userId });
  }
}
