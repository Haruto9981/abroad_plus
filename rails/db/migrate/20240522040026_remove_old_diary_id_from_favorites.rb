class RemoveOldDiaryIdFromFavorites < ActiveRecord::Migration[7.0]
  def change
    remove_column :favorites, :old_diary_id, :integer
  end
end
