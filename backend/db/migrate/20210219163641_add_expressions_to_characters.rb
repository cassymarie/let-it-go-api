class AddExpressionsToCharacters < ActiveRecord::Migration[6.1]
  def change
    add_column :characters, :initial, :integer
    add_column :characters, :finish, :integer
    add_column :characters, :taunt, :integer
    add_column :characters, :stunned, :integer
    add_column :characters, :angry, :integer
    add_column :characters, :scared, :integer
  end
end
