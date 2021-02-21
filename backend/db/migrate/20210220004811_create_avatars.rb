class CreateAvatars < ActiveRecord::Migration[6.1]
  def change
    create_table :avatars do |t|
      t.belongs_to :user
      t.belongs_to :character
      t.string :name
      t.integer :face_id
      t.string :knockout_phrase
      t.timestamps
    end
  end
end
