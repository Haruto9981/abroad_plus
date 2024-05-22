class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.bigint :user_id, null: false
      t.string :diary_id, null: false
      t.timestamps

      t.index [:user_id, :diary_id], unique: true, name: 'user_diary_unique'
    end

    add_foreign_key :favorites, :users, column: :user_id
    add_foreign_key :favorites, :diaries, column: :diary_id
  end
end
