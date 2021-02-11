class CreateCharachters < ActiveRecord::Migration[6.1]
  def change
    create_table :charachters do |t|
      t.string :name
      t.string :title
      t.string :imageUrl
      t.string :knockout_phrase

      t.timestamps
    end
  end
end
