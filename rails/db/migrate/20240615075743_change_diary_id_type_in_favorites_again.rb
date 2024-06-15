class ChangeDiaryIdTypeInFavoritesAgain < ActiveRecord::Migration[7.0]
  def change
    change_column :favorites, :diary_id, :string
  end
end
