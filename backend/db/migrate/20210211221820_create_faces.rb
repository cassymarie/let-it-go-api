class CreateFaces < ActiveRecord::Migration[6.1]
  def change
    create_table :faces do |t|
      t.string :name
      t.string :initial
      t.timestamps
    end
  end
end
