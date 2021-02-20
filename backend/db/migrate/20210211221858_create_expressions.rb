class CreateExpressions < ActiveRecord::Migration[6.1]
  def change
    create_table :expressions do |t|
      t.string :title
      t.string :imageUrl
      t.belongs_to :face
      t.string :category
      t.timestamps
    end
  end
end
