class PostsController < ApplicationController

  def index
    @post = Post.all
    render json: @post
  end

  def create
    @post = Post.create(title: params[:title],content: params[:content],price: params[:price])
    render json: @post
  end


end
