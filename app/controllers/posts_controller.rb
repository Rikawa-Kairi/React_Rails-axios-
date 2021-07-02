class PostsController < ApplicationController

  def index
    @post = Post.all
    render json: @post
  end

  def create
    @post = Post.create(title: params[:title])
    render json: @post
  end

end
