class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :damage
      t.string :base_imageUrl
      t.string :splat_imageUrl

      t.timestamps
    end
  end
end
