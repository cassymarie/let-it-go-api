class CreateExpressions < ActiveRecord::Migration[6.1]
  def change
    create_table :expressions do |t|
      t.string :description
      t.string :imageUrl

      t.timestamps
    end
  end
end
