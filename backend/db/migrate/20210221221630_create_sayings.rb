class CreateSayings < ActiveRecord::Migration[6.1]
  def change
    create_table :sayings do |t|
      t.string :phrase
      t.belongs_to :avatar
      t.belongs_to :character, default: nil
      t.timestamps
    end
  end
end
