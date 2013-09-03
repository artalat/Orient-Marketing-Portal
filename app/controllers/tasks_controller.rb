class TasksController < ApplicationController

  def index
      @tasks = Task.all
      @shops = Shop.all
      @task = Task.new
      respond_to do |format|
        format.html # index.html.erb
        format.json { render json: @tasks }
      end
  end

  def new
    @task = Task.new
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @task }
    end
  end

  def create
    @task = Task.new(params[:task])

    respond_to do |format|
      if @task.save
        format.html { redirect_to tasks_path, notice: 'Task was successfully created.'}
        format.json { render json: tasks }
      else
        format.html { render action: "new" }
        format.json { render json: @task.errors, status: :unprocessable_entity }
      end
    end
  end

  def change
    @task = Task.find(params[:id])
    @task.status = 'completed'
    respond_to do |format|
      if @task.save
        format.html { redirect_to tasks_path, notice: 'Status was successfully upadted.'}
        format.json { render json: tasks }
      else
        format.html { render action: "new" }
        format.json { render json: @task.errors, status: :unprocessable_entity }
      end
    end
  end

end