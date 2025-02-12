import { Controller, Post, Get, Body, Req, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';  // Import JwtAuthGuard

@UseGuards(JwtAuthGuard)  // Apply guard to protect all routes
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  async createTask(@Body() body, @Req() req) {
    const userId = req.user.userId;  // Access userId from req.user
    return this.tasksService.createTask(body.title, userId);
  }

  @Get()
  async getTasks(@Req() req) {
    const userId = req.user.userId;
    return this.tasksService.getTasks(userId);
  }
}