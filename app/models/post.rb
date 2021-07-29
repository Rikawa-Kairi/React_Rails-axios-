class Post < ApplicationRecord
  mount_uploader :image, LabelUploader
end
