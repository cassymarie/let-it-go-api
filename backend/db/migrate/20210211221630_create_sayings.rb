class CreateSayings < ActiveRecord::Migration[6.1]
  def change
    create_table :sayings do |t|
      t.string :phrase
      t.belongs_to :character
      t.timestamps
    end
  end
end
