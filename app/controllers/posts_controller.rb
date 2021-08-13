class PostsController < ApplicationController

  def index
    @post = Post.all
    render json: @post
  end

  
  def create
    @post = Post.new(posts_params)
    if @post.save
      render json: { status: 200, post: @post }
    else
      render json: { status: 500 }
    end
  end

  private
  def posts_params
    params.require(:post).permit(:post,:title,:content,:price,:image)
  end
end
