import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Task, TaskSchema } from './task.schema';  // Import Task & TaskSchema

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Task.name, schema: TaskSchema },  // Register Task model
    ]),
  ],
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TasksService],  // Optional: Export if needed in other modules
})
export class TasksModule {}
