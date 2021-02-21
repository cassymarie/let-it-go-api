class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :title
      t.integer :face_id
      t.string :imageUrl
      t.timestamps
    end
  end
end
