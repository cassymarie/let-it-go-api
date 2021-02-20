class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :count, default: 1
      t.integer :damage, default: 1
      t.string :base_imageUrl
      t.string :throw_imageUrl
      t.string :splat_imageUrl
      t.string :base_transition
      t.string :splat_transition
      t.string :throw_transition
      t.timestamps
    end
  end
end
