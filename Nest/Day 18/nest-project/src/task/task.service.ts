import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schema/task.schema.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name)
    private taskModel: Model<TaskDocument>,
  ) {}

  async createTask(createTaskDto: CreateTaskDto) {
    const task = await this.taskModel.create(createTaskDto);

    return task;
  }

  async findAll() {
    const tasks = await this.taskModel.find();

    return tasks;
  }

  async findOne(id: string) {
  const task = await this.taskModel.findById(id);

  if (!task) {
    throw new NotFoundException(`Task with ID ${id} not found`);
  }

  return task;
}   

async update(id: string, updateTaskDto: UpdateTaskDto) {
  const updatedTask = await this.taskModel.findByIdAndUpdate(
    id,
    updateTaskDto,
    {
      new: true,
      runValidators: true,
    },
  );

  if (!updatedTask) {
    throw new NotFoundException(`Task with ID ${id} not found`);
  }

  return updatedTask;
}

async remove(id: string) {
  const deletedTask = await this.taskModel.findByIdAndDelete(id);

  if (!deletedTask) {
    throw new NotFoundException(`Task with ID ${id} not found`);
  }

  return {
    message: 'Task deleted successfully',
    task: deletedTask,
  };
}
}