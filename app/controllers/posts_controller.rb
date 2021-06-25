class PostsController < ApplicationController

  def index
    @post = Post.all
    render json: @post
  end

  # def create
  #   @post = Post.create(name: params[:name])
  #   render json: @post
  # end

end
