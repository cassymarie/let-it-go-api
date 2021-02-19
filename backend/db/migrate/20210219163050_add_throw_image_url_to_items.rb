class AddThrowImageUrlToItems < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :throw_imageUrl, :string
  end
end
